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
          navigator.serviceWorker.ready.then(function (registration): void {
            registration.showNotification(
              `Новое сообщение в поддержку #${event_data.data.id}`,
              { body: event_data.data.message }
            );
          });
        } else {
          navigator.serviceWorker.ready.then(function (registration): void {
            registration.showNotification(
              `Новый заказ в 3D #${event_data.data.printing_model_id}!`
            );
          });
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
            farm_obj.real_life_shelves = farm_obj.real_life_shelves.sort(
              (a: any, b: any) => a.id - b.id
            );
          }
          return [...prevData, farm_obj].sort((a, b) => a.id - b.id);
        } else {
          return prevData;
        }
      });
      if (Notification.permission === "granted") {
        navigator.serviceWorker.ready.then(function (registration): void {
          registration.showNotification("Новый заказ в ферму!", {
            body: `Ферма ${event_data.data.farm_id}, id ячейки: ${event_data.data.id}`,
          });
        });
      }
    } else if (event_data.type === "new_delivery_order") {
      setData(event_data.data);
      if (Notification.permission === "granted") {
        navigator.serviceWorker.ready.then(function (registration): void {
          registration.showNotification(
            `Новый запрос на доставку #${event_data.data.id}`
          );
        });
      }
    }
  };
  websocket.onclose = (e: any) => {
    console.log(e);
    socketOnClose();
  };
};
