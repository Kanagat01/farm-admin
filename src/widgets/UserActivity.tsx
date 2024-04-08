import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  UserActivityProps,
  UserActivity,
  UserActivityHeaders,
  getUserActivityData,
} from "~/entities";
import { apiInstance } from "~/shared/api";
import { Preloader, Table } from "~/shared/ui";

export function UserActivityModal({ user_id }: UserActivityProps) {
  const [showModal, setShowModal] = useState(false);
  const changeModal = () => {
    setShowModal(!showModal);
  };
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<UserActivity[][]>([]);
  useEffect(() => {
    apiInstance
      .post("/api_admin/get_user_actions/", {
        user_profile_id: user_id,
      })
      .then((response) => {
        setData(getUserActivityData(response.data.message));
        setIsLoading(false);
      });
  }, [user_id]);
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
          {isLoading ? (
            <Preloader />
          ) : (
            <Table columns={Object.values(UserActivityHeaders)} data={data} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
