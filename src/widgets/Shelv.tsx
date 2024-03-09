import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Input } from "~/shared/ui";
import { apiInstance } from "~/shared/api";
import { dateToString } from "~/shared/lib";
import { API_URL } from "~/shared/config";

function SeedCard(props: any) {
  let { cell, toast } = props;
  const [planted_seed, setPlantedSeed] = useState(cell?.planted_seed);
  const [is_planted, setIsPlanted] = useState(cell.is_planted_in_real_life);
  useEffect(() => {
    setPlantedSeed(cell?.planted_seed);
    setIsPlanted(cell.is_planted_in_real_life);
  }, [cell]);

  let created_date;
  if (planted_seed) {
    created_date = dateToString(planted_seed.created_date);
  }

  const plantedSeedModel = planted_seed
    ? {
        "ID посаженной семени": planted_seed.id,
        "Дата создания": created_date,
        "Готовы все уровни": planted_seed.is_all_levels_done ? "Да" : "Нет",
        "Готов в реальной жизни": planted_seed.is_ready_in_real_life
          ? "Да"
          : "Нет",
        "ID Владельца": planted_seed.owner_id,
        "Имя Владельца": planted_seed.owner_name,
        "Название семени": planted_seed.seed_name,
        "Изображение семени (URL)": API_URL + planted_seed.seed_image,
      }
    : {};

  const [showModal, setShowModal] = useState(false);
  const onClickPrimary = () => {
    apiInstance
      .post(
        `/api_admin/${
          is_planted ? "real_life_cell_ready" : "real_life_cell_planted"
        }/`,
        {
          cell_id: cell.id,
        }
      ) // @ts-ignore
      .then((response) => {
        setPlantedSeed(is_planted ? null : planted_seed);
        setIsPlanted(!is_planted);

        toast.success(
          `${planted_seed?.seed_name} отмечен ${
            is_planted ? "выращенным" : "посаженным"
          }`
        );
      })
      .catch((error) => toast.error(error));
    setShowModal(!showModal);
  };
  return (
    <div className="seed-card">
      <div
        className={`card ${
          planted_seed ? (is_planted ? "planted-card" : "need-to-plant") : ""
        }`}
      >
        <a
          className="table-link"
          onClick={() => {
            if (planted_seed) {
              setShowModal(!showModal);
            }
          }}
          style={{
            textDecoration: planted_seed?.seed_name ? "underline" : "none",
            cursor: planted_seed?.seed_name ? "pointer" : "default",
          }}
        >
          {planted_seed?.seed_name ? (
            <>
              {planted_seed?.seed_name.slice(0, 15)}
              {planted_seed?.seed_name.length > 15 ? "..." : ""}
              <br />
            </>
          ) : (
            ""
          )}
          id ячейки: {cell.id}
        </a>

        <Modal
          show={showModal}
          onHide={() => {
            setShowModal(!showModal);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Информация о семени</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {Object.entries(plantedSeedModel).map(([key, value]) =>
              typeof value === "string" && value.includes("https://") ? (
                <div
                  key={key}
                  className="form-group input-rounded d-flex align-items-center"
                >
                  <label className="mb-0 me-3">{key}</label>
                  <a href={value} target="_blank" className="table-link">
                    Смотреть
                  </a>
                </div>
              ) : (
                <Input key={key} label={key} value={value} disabled={true} />
              )
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              Отмена
            </Button>
            <Button variant="primary" onClick={onClickPrimary}>
              {is_planted ? "Отметить выращенным" : "Посадить"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <span className="text-gray">
        {planted_seed ? (is_planted ? "Занято" : "Нужна посадка") : "Пусто"}
      </span>
    </div>
  );
}

export function Shelv({ shelv, toast }: any) {
  let data = shelv.real_life_farm_cells.map((cell: any) => (
    <SeedCard cell={cell} toast={toast} />
  ));
  return (
    <div className="seeds-block">
      <div className="d-flex align-items-center" style={{ gap: "10px" }}>
        <div className="seeds-block-img"></div>
        <div className="seeds-block-title">{shelv.name}</div>
      </div>
      <table className="table">
        <tbody>
          <tr>
            {data.slice(0, 8).map((cell: any, index: number) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
          <tr>
            {data.slice(8, 16).map((cell: any, index: number) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
