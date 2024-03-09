import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  User,
  UserActivity,
  UserActivityHeaders,
  UserHeaders,
} from "~/entities";
import { apiInstance } from "~/shared/api";
import { dateToString } from "~/shared/lib";
import { Input, Table } from "~/shared/ui";

export function UserInfo({ id, user }: { id: number; user: User }) {
  const [showModal, setShowModal] = useState<Record<number, boolean>>({});
  const [data, setData] = useState([]);
  useEffect(() => {
    apiInstance
      .post("/api_admin/get_user_actions/", {
        user_profile_id: user.id,
      })
      .then((response) => {
        setData(
          response.data.message.map((activity: UserActivity) =>
            Object.keys(UserActivityHeaders).map((key) => {
              if (key === "action_datetime") {
                return dateToString(activity[key]);
              }
              //@ts-ignore
              return activity[key];
            })
          )
        );
      });
  }, []);
  const changeModal = () => {
    setShowModal({ ...showModal, [id]: !showModal[id] });
  };
  return (
    <>
      <a className="table-link" onClick={changeModal}>
        Смотреть
      </a>
      <Modal show={showModal[id]} onHide={changeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Информация о пользователе</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.entries(UserHeaders).map(([key, label]) => {
            if (key !== "activity") {
              //@ts-ignore
              let value = user[key];
              if (key === "joined_date") {
                value = dateToString(value);
              } else if (key === "is_banned") {
                //@ts-ignore
                value = user.blocked ? "Заблокирован" : "Активен";
              } else if (key === "subscription_type") {
                value =
                  value === "ST"
                    ? "Стандарт"
                    : value === "TE"
                    ? "Тестовый"
                    : "Премиум";
              }
              if (value) {
                return <Input label={label} value={value} disabled={true} />;
              }
            }
          })}
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
              Активность
            </div>
            <Table columns={Object.values(UserActivityHeaders)} data={data} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
