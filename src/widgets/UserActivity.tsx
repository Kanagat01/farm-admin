import { useState } from "react";
import { Modal } from "react-bootstrap";
import { UserActivityProps } from "~/entities";

export function UserActivity({ user_id, activity }: UserActivityProps) {
  const [showModal, setShowModal] = useState(false);
  const changeModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <a className="table-link" onClick={changeModal}>
        Смотреть
      </a>

      <Modal show={showModal} onHide={changeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Действия пользователя #{user_id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Тут будет Активность {activity ? activity.join(", ") : ""}
        </Modal.Body>
      </Modal>
    </>
  );
}
