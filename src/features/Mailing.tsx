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
  users: string[];
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
    users: [],
  });

  const [userMail, setUserMail] = useState("");

  const appendEmail = (parentNode: ParentNode, email: string) => {
    let arrayElement = parentNode.querySelector(".array-elements");

    if (!arrayElement) {
      arrayElement = document.createElement("div");
      arrayElement.classList.add("array-elements", "col-md-9", "ms-auto");
      parentNode.appendChild(arrayElement);
    }

    const mailNode = document.createElement("div");
    mailNode.textContent = email;

    const closeButton = document.createElement("button");
    closeButton.classList.add("btn-close");
    closeButton.addEventListener("click", () => {
      let users_array = [...mailingObj.users];
      const index = users_array.indexOf(email);
      if (index > -1) {
        users_array.splice(index, 1);
      }
      setMailingObj({
        ...mailingObj,
        users: users_array,
      });
      mailNode.remove();
    });

    mailNode.appendChild(closeButton);
    arrayElement.appendChild(mailNode);

    setMailingObj({
      ...mailingObj,
      users: [...mailingObj.users, email],
    });
    setUserMail("");
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(userMail) && !mailingObj.users.includes(userMail)) {
        const parentNode = e.target.parentNode.parentNode;
        appendEmail(parentNode, userMail);
      }
    }
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.target.value;
    if (text.length >= 3) {
      apiInstance
        .post("/api_admin/get_user_emails/", { text: text })
        .then((response): void => {
          let data = response.data.message;
          data =
            data.length > 0
              ? data.map((obj: { email: string }) => obj.email)
              : [];

          const parentNode = e.target.parentNode as HTMLElement;
          parentNode.classList.add("position-relative");
          parentNode.querySelector("invalid-feedback")?.classList.add("d-none");

          let results = parentNode?.querySelector(".results");
          if (!results) {
            results = document.createElement("div");
            results.classList.add("results");
            parentNode.appendChild(results);
          }
          results.innerHTML = "";

          for (let email in data) {
            let item = document.createElement("div");
            item.classList.add("res-item");
            item.textContent = data[email];
            item.onclick = () => {
              if (!mailingObj.users.includes(data[email])) {
                appendEmail(parentNode.parentNode as ParentNode, data[email]);
                //@ts-ignore
                results.innerHTML = "";
              }
            };
            results.appendChild(item);
          }
        });
    }
    setUserMail(text);
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
        { label: "Определенные пользователи", value: "specific" },
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
      onChange={onChangeEmail}
      onKeyDown={handleKeyPress}
      show={mailingObj.type === "specific"}
      show_feedback={false}
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
