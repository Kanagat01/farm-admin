import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Model, ModelLevelTranslation, ModelTranslation } from "~/entities";
import { API_URL } from "~/shared/config";
import { Input, Table } from "~/shared/ui";

export function ModelInfo({ model }: { model: Model }) {
  const [showModal, setShowModal] = useState<Record<number, boolean>>({});

  const changeModal = () => {
    setShowModal({ ...showModal, [model.id]: !showModal[model.id] });
  };
  return (
    <>
      <a className="table-link" onClick={changeModal}>
        Смотреть
      </a>
      <Modal show={showModal[model.id]} onHide={changeModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div
            className="table-title text-center mb-4"
            style={{ fontSize: "2rem" }}
          >
            Информация о модели
          </div>
          {Object.entries(ModelTranslation).map(([key, value]) => {
            switch (key) {
              case "file":
              case "image":
              case "first_level_animation":
                return (
                  <div
                    key={key}
                    className="form-group input-rounded row d-flex align-items-center"
                  >
                    <div className="col-md-3 d-flex justify-content-md-end justify-content-start">
                      <label>{value}</label>
                    </div>
                    <div className="col-md-9">
                      <a // @ts-ignore
                        href={API_URL + model[key]}
                        target="_blank"
                        className="table-link"
                      >
                        Смотреть
                      </a>
                    </div>
                  </div>
                );
              case "levels":
                let data = model.levels.map((level) =>
                  Object.keys(ModelLevelTranslation).map((key) => {
                    if (key === "image") {
                      return (
                        <a // @ts-ignore
                          href={API_URL + level[key]}
                          target="_blank"
                          className="table-link"
                        >
                          Смотреть
                        </a>
                      );
                    }
                    //@ts-ignore
                    return level[key];
                  })
                );

                return (
                  <div
                    style={{
                      background: "var(--form-control-bg)",
                      padding: "2rem",
                    }}
                  >
                    <div
                      className="table-title text-center mb-4"
                      style={{ fontSize: "2rem" }}
                    >
                      {value}
                    </div>
                    <Table
                      columns={Object.values(ModelLevelTranslation)}
                      data={data}
                    />
                  </div>
                );
              default:
                return (
                  <Input
                    key={key}
                    label={value}
                    //@ts-ignore
                    value={model[key]}
                    disabled={true}
                  />
                );
            }
          })}
        </Modal.Body>
      </Modal>
    </>
  );
}
