export const getValue = (dict: any, option: any) => {
  if (option === "Ферма") {
    return dict["farm"];
  } else if (option === "printer") {
    return dict["printer"];
  } else {
    return dict["farm"] + dict["printer"];
  }
};

export const getDays = () => {
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
