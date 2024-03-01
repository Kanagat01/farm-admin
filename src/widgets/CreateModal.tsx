import { ChangeEvent, useState } from "react";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { Modal, Button } from "react-bootstrap";

import { apiInstance } from "~/shared/api";
import { Input } from "~/shared/ui";

export function CreateModal({ getFarms }: any) {
  const [showCreateObjModal, setShowCreateObjModal] = useState(false);
  const changeCreateObjModal = () => {
    setShowCreateObjModal(!showCreateObjModal);
  };
  const [shelfCount, setShelfCount] = useState(1);
  const createObj = () => {
    apiInstance
      .post("/api_admin/create_vertical_farm_view/", {
        shelf_count: shelfCount,
      })
      .then((response) => {
        console.log(response);
        getFarms();
      });
    setShowCreateObjModal(false);
  };
  return (
    <>
      <button
        className="btn btn-primary rounded-btn d-flex align-items-center py-2"
        onClick={changeCreateObjModal}
      >
        <span className="me-2">Создать ферму</span>
        <Icon path={mdiPlus} style={{ height: "2rem", width: "2rem" }} />
      </button>

      <Modal show={showCreateObjModal} onHide={changeCreateObjModal}>
        <Modal.Header closeButton>
          <Modal.Title>Создать вертикальную ферму</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            label="Количество полок / поддонов"
            type="number"
            value={shelfCount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              let newValue = Number(e.target.value);
              if (newValue >= 1 && newValue <= 100) {
                setShelfCount(newValue);
              }
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={changeCreateObjModal}>
            Отмена
          </Button>
          <Button variant="primary" onClick={createObj}>
            Создать
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
