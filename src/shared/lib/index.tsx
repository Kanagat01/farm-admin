export const dateToString = (dateStr: string) => {
  let date = new Date(dateStr);

  let day = ("0" + date.getUTCDate()).slice(-2);
  let month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  let year = date.getUTCFullYear();
  let hours = ("0" + date.getUTCHours()).slice(-2);
  let minutes = ("0" + date.getUTCMinutes()).slice(-2);

  let formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
  return formattedDate;
};

export const useSocket = (websocket: any, setData: any, socketOnClose: any) => {
  websocket.onopen = () => {
    console.log("connected");
  };
  websocket.onmessage = (event: any) => {
    let event_data = JSON.parse(event.data);
    if (
      ["new_printing_model3d", "new_support_message"].includes(event_data.type)
    ) {
      setData((prevData: any) => [...prevData, event_data.data]);
      if (Notification.permission === "granted") {
        if (event_data.type === "new_support_message") {
          new Notification(
            `Новое сообщение в поддержку #${event_data.data.id}`,
            { body: event_data.data.message }
          );
        } else {
          new Notification(
            `Новый заказ в 3D #${event_data.data.printing_model_id}!`
          );
        }
      }
    } else if (event_data.type === "new_farm_planted_seed") {
      setData((prevData: any) => {
        let cell_info = event_data.data;

        let farm_idx = prevData.findIndex(
          (farm: any) => cell_info.farm_id === farm.id
        );

        if (farm_idx !== -1) {
          let farm_obj = JSON.parse(JSON.stringify(prevData[farm_idx]));
          prevData.splice(farm_idx, 1);
          let shelf_idx = cell_info.shelf - farm_obj.real_life_shelves[0].id;

          let cell_idx = farm_obj.real_life_shelves[
            shelf_idx
          ].real_life_farm_cells.findIndex(
            (cell: any) => cell.id === cell_info.id
          );

          if (cell_idx !== -1) {
            farm_obj.real_life_shelves[shelf_idx].real_life_farm_cells.splice(
              cell_idx,
              1
            );
            farm_obj.real_life_shelves[shelf_idx].real_life_farm_cells = [
              ...farm_obj.real_life_shelves[shelf_idx].real_life_farm_cells,
              cell_info,
            ].sort((a, b) => a.id - b.id);
          }
          return [...prevData, farm_obj].sort((a, b) => a.id - b.id);
        } else {
          return prevData;
        }
      });
      if (Notification.permission === "granted") {
        new Notification("Новый заказ в ферму!", {
          body: `Ферма ${event_data.data.farm_id}, id ячейки: ${event_data.data.id}`,
        });
      }
    } else if (event_data.type === "new_delivery_order") {
      setData(event_data.data);
      if (Notification.permission === "granted") {
        new Notification(`Новый запрос на доставку #${event_data.data.id}`);
      }
    }
  };
  websocket.onclose = (e: any) => {
    console.log(e);
    socketOnClose();
  };
};

/////////////////////////////////// Analytics

const getValue = (dict: any, option: any) => {
  if (option === "Ферма") {
    return dict["farm"];
  } else if (option === "printer") {
    return dict["printer"];
  } else {
    return dict["farm"] + dict["printer"];
  }
};

const getDays = () => {
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  let oneWeekAgo = new Date();
  oneWeekAgo.setDate(today.getDate() - 6);
  oneWeekAgo.setHours(0, 0, 0, 0);

  let oneMonthAgo = new Date();
  oneMonthAgo.setMonth(today.getMonth() - 1);
  oneMonthAgo.setHours(0, 0, 0, 0);

  return [today, oneWeekAgo, oneMonthAgo];
};

export const getStatsData = (statsData: any, page: any) => {
  let result = [];
  if (page === "order_analytics") {
    let { completed, not_completed, payed, not_payed } = statsData;
    ["completed", "not_completed", "payed", "not_payed"].map(
      (key) => delete statsData[key]
    );
    result.push(...[completed, not_completed, payed, not_payed]);
  }

  let [today, oneWeekAgo, oneMonthAgo] = getDays();

  let todayKey = today.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const getStatsValue = (dict: any) => dict["farm"] + dict["printer"];
  let todayData = 0;
  if (Object.keys(statsData).includes(todayKey)) {
    todayData = getStatsValue(statsData[todayKey]);
  }

  let [weekData, monthData] = [
    ...[oneWeekAgo, oneMonthAgo].map((date) => {
      let tempData = Object.keys(statsData)
        .filter((key: any) => {
          key = new Date(key);
          key.setHours(0, 0, 0, 0);
          return key >= date && key <= today;
        })
        .map((key) => getStatsValue(statsData[key]));
      return tempData.reduce((a, b) => a + b, 0);
    }),
  ];

  let quarterData: any = Object.keys(statsData).map((key) =>
    getStatsValue(statsData[key])
  );
  quarterData = quarterData.reduce((a: number, b: number) => a + b, 0);
  weekData = isNaN(weekData) ? 0 : weekData;
  monthData = isNaN(monthData) ? 0 : monthData;
  quarterData = isNaN(quarterData) ? 0 : quarterData;

  result.unshift(...[todayData, weekData, monthData, quarterData]);
  return result;
};

export const getTabData = (data: any, page: string, option: string) => {
  if (page === "order_analytics") {
    ["completed", "not_completed", "payed", "not_payed"].map(
      (key) => delete data[key]
    );
  }
  const [today, oneWeekAgo, oneMonthAgo] = getDays();

  let [weekLabels, monthLabels] = [
    ...[oneWeekAgo, oneMonthAgo].map((date) => {
      return Object.keys(data).filter((key: string | Date) => {
        key = new Date(key);
        key.setHours(0, 0, 0, 0);
        return key >= date && key <= today;
      });
    }),
  ];
  let [weekDataset, monthDataset] = [
    ...[weekLabels, monthLabels].map((lst) => {
      return lst.map((key) => getValue(data[key], option));
    }),
  ];

  let quarterDataset = Object.keys(data).map((key) =>
    getValue(data[key], option)
  );
  return {
    week: {
      title: "Неделя",
      labels: weekLabels,
      dataset: weekDataset,
    },
    month: {
      title: "Месяц",
      labels: monthLabels,
      dataset: monthDataset,
    },
    quarter: {
      title: "Квартал",
      labels: Object.keys(data),
      dataset: quarterDataset,
    },
  };
};
