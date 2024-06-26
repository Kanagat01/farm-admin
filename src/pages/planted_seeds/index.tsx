import { useState, useEffect, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import Accordion from "react-bootstrap/Accordion";

import { WebSocketContext } from "~/app/providers";
import { CreateModal, Shelv } from "~/widgets";
import { Table } from "~/shared/ui";
import { apiInstance, createResource } from "~/shared/api";
import { dateToString, useSocket } from "~/shared/lib";
import { envDataTranslation } from "~/entities";

// const evnDataResourse = createResource("/api_admin/get_environmental_data/");
const farmsResourse = createResource("/api_admin/get_farms/");
const videosResourse = createResource("/api_admin/get_live_video_urls/");

export default function PlantedSeeds() {
  const { socket } = useContext(WebSocketContext);
  // let responseData = evnDataResourse.read();
  let responseData = {
    id: 1,
    date: "2024-03-10",
    CO2: 0,
    air_temperature: 0,
    air_humidity: 0,
    UV_index: 0,
  };
  if (responseData && "date" in responseData) {
    responseData.date = dateToString(responseData.date);
  }
  let envData: Record<string, string> = {};

  for (let key in responseData) {
    // @ts-ignore
    envData[envDataTranslation[key]] = responseData[key];
  }

  const sortFarmData = (data: any) => {
    data.message
      .sort((a: any, b: any) => a.id - b.id)
      .map((item: any) => {
        let sortedShelves = item.real_life_shelves
          .map((shelf: any) => {
            let sortedCells = shelf.real_life_farm_cells.sort(
              (a: any, b: any) => a.id - b.id
            );
            return { ...shelf, real_life_farm_cells: sortedCells };
          })
          .sort((a: any, b: any) => a.id - b.id);
        return { ...item, real_life_shelves: sortedShelves };
      });
    return data.message;
  };
  let farmResponseData = farmsResourse.read();
  let sortedData = sortFarmData(farmResponseData);
  const [farmData, setFarmData] = useState<any>(sortedData);

  const getFarms = () => {
    apiInstance.get("/api_admin/get_farms/").then((response) => {
      let sortedData = sortFarmData(response.data);
      setFarmData(sortedData);
    });
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = () => {
      const onClose = () => {
        if (isMounted) {
          toast.error("Сокет отключен. Перезагрузите страницу");
        }
      };
      useSocket(socket, setFarmData, onClose);
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const videos: any[] = [videosResourse.read().message]; // в момент написания кода, отправлялось в виде строки, хотя должен быть в виде списка

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
              <video
                controls
                autoPlay
                style={{ width: "100%", height: "100%" }}
              >
                <source src={link} type="video/mp4" />
              </video>
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
