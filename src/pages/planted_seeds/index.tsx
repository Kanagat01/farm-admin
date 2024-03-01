import { useState, useEffect, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import Accordion from "react-bootstrap/Accordion";

import { WebSocketContext } from "~/app/providers";
import { CreateModal, Shelv } from "~/widgets";
import { Table } from "~/shared/ui";
import { apiInstance } from "~/shared/api";
import { dateToString, useSocket } from "~/shared/lib";

export default function PlantedSeeds() {
  const websocket = useContext(WebSocketContext);
  const [envData, setEnvData] = useState<any>([]);

  const [farmData, setFarmData] = useState<any>([]);
  const getFarms = () => {
    apiInstance.get("/api_admin/get_farms/").then((response) => {
      let sortedData = response.data.message
        .sort((a: any, b: any) => a.id - b.id)
        .map((item: any) => {
          let sortedShelves = item.real_life_shelves.map((shelf: any) => {
            let sortedCells = shelf.real_life_farm_cells.sort(
              (a: any, b: any) => a.id - b.id
            );
            return { ...shelf, real_life_farm_cells: sortedCells };
          });
          return { ...item, real_life_shelves: sortedShelves };
        });
      setFarmData(sortedData);
    });
  };
  useEffect(() => {
    let isMounted = true;

    const fetchData = () => {
      apiInstance.get("/api_admin/get_environmental_data/").then((response) => {
        if (isMounted) {
          let translation: Record<string, string> = {
            id: "id",
            date: "Дата",
            CO2: "CO2",
            air_temperature: "Температура воздуха",
            air_humidity: "Влажность воздуха",
            UV_index: "Индекс УФ",
            soil_humidity_1_centimeter: "Влажность почвы 1 сантиметр",
            soil_humidity_1_5_centimeter: "Влажность почвы 1.5 сантиметра",
          };

          let responseData = response.data;
          responseData.date = dateToString(responseData.date);
          let translatedData: Record<string, string> = {};

          for (let key in responseData) {
            translatedData[translation[key]] = responseData[key];
          }

          setEnvData(translatedData);
        }
      });
      getFarms();
      const onClose = () => {
        if (isMounted) {
          toast.error("Сокет отключен. Перезагрузите страницу");
        }
      };
      useSocket(websocket, setFarmData, onClose);
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);
  const videos = [
    "https://www.youtube.com/embed/lwYzwdBiaho?si=WQND6Hhdtw3KpEFb",
  ];

  return (
    <>
      <ToastContainer />
      <div className="table-title my-4">Показатели датчиков</div>
      <Table columns={Object.keys(envData)} data={[Object.values(envData)]} />
      <div className="table-title my-4">Видеонаблюдение за фермой</div>
      <div className="row p-2">
        {videos.map((link, key) => (
          <div key={key} className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="responsive-container">
              <iframe
                width="560"
                height="315"
                src={link}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex my-4">
        <CreateModal getFarms={getFarms} />
      </div>
      <Accordion defaultActiveKey={farmData && farmData[0] && farmData[0].id}>
        {farmData
          ? farmData.map((farm: any) => (
              <Accordion.Item key={farm.id} eventKey={farm.id}>
                <Accordion.Header>
                  <div className="seeds-block-title ms-3">{farm.name}</div>
                </Accordion.Header>
                <Accordion.Body>
                  {farm.real_life_shelves.map((shelv: any, key: number) => (
                    <Shelv key={key} shelv={shelv} toast={toast} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))
          : "Ферм пока нет"}
      </Accordion>
    </>
  );
}
