import { ChangeEvent, Fragment, useState } from "react";
import Icon from "@mdi/react";
import { mdiSend } from "@mdi/js";
import { Modal, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { EmailInput, Input, RadioInput, TextArea } from "~/shared/ui";
import { apiInstance } from "~/shared/api";

interface MailingObj {
  type: string;
  text: string;
  title: string;
  users_array: string[];
}

export const Mailing = () => {
  const [showMailingModal, setShowMailingModal] = useState(false);

  const changeMailingModal = () => {
    setShowMailingModal(!showMailingModal);
  };
  const [mailingObj, setMailingObj] = useState<MailingObj>({
    type: "all",
    text: "",
    title: "",
    users_array: [],
  });

  const [userMail, setUserMail] = useState("");
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(userMail)) {
        const parentNode = e.target.parentNode.parentNode;
        let arrayElement = parentNode.querySelector(".array-elements");

        if (!arrayElement) {
          arrayElement = document.createElement("div");
          arrayElement.classList.add("array-elements", "col-md-9", "ms-auto");
          parentNode.appendChild(arrayElement);
        }

        const mailNode = document.createElement("div");
        mailNode.textContent = userMail;

        const closeButton = document.createElement("button");
        closeButton.classList.add("btn-close");
        closeButton.addEventListener("click", () => {
          let users_array = [...mailingObj.users_array];
          const index = users_array.indexOf(userMail);
          if (index > -1) {
            users_array.splice(index, 1);
          }
          setMailingObj({
            ...mailingObj,
            users_array: users_array,
          });
          mailNode.remove();
        });

        mailNode.appendChild(closeButton);
        arrayElement.appendChild(mailNode);

        setMailingObj({
          ...mailingObj,
          users_array: [...mailingObj.users_array, userMail],
        });
        setUserMail("");
      }
    }
  };

  const mailing_inputs = [
    <Input
      label="Тема письма"
      type="text"
      name="title"
      value={mailingObj.title}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setMailingObj({ ...mailingObj, title: e.target.value });
      }}
    />,
    <TextArea
      label="Текст рассылки"
      name="text"
      value={mailingObj.text}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
        setMailingObj({ ...mailingObj, text: e.target.value });
      }}
    />,
    <RadioInput
      label="Категория пользователей"
      name="type"
      radio_inputs={[
        { label: "Все", value: "all" },
        { label: "Ферма", value: "farm" },
        { label: "3D", value: "printer" },
        { label: "Определенные пользователи", value: "specific_users" },
      ]}
      value={mailingObj.type}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setMailingObj({ ...mailingObj, type: e.target.value });
      }}
    />,
    <EmailInput
      label="Email пользователя"
      name="user_mail"
      value={userMail}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setUserMail(e.target.value);
      }}
      onKeyDown={handleKeyPress}
      show={mailingObj.type === "specific_users"}
    />,
  ];

  const createMailing = () => {
    apiInstance
      .post("/api_admin/create_mailing/", mailingObj)
      // @ts-ignore
      .then((response) => {
        toast.success("Рассылка успешно создана!");
      })
      .catch((error) => {
        toast.error(`Ошибка: ${error}`);
      });
    setShowMailingModal(false);
  };

  return (
    <>
      <ToastContainer style={{ fontSize: "1.4rem" }} />
      <button
        className="btn btn-primary rounded-btn d-flex align-items-center py-2"
        onClick={changeMailingModal}
      >
        <span className="me-2">Рассылка</span>
        <Icon path={mdiSend} style={{ height: "1.5rem", width: "1.5rem" }} />
      </button>
      <Modal show={showMailingModal} onHide={changeMailingModal}>
        <Modal.Header closeButton>
          <Modal.Title>Сделать новую рассылку</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mailing_inputs.map((inputComponent, index) => (
            <Fragment key={index}>{inputComponent}</Fragment>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={changeMailingModal}>
            Отмена
          </Button>
          <Button variant="primary" onClick={createMailing}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
