import { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { apiInstance } from "~/shared/api";
import { TextArea } from "~/shared/ui";

interface ResolveModalProps {
  message_id: number;
  message: string;
  removeObj: (message_id: number) => void;
}
export function ResolveModal({
  message_id,
  message,
  removeObj,
}: ResolveModalProps) {
  const [showModal, setShowModal] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);

  const changeModal = () => {
    setShowModal({ ...showModal, [message_id]: !showModal[message_id] });
  };

  const modelPrinted = () => {
    setIsLoading(true);
    apiInstance
      .post("/api_admin/resolve_support_message/", {
        message_id: message_id,
      })
      .then((response) => {
        console.log(response.data);
        toast.success(`Обращение #${message_id} успешно решена`);
        removeObj(message_id);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
    setIsLoading(false);
    changeModal();
  };

  return (
    <>
      <ToastContainer />
      <a className="table-link" onClick={changeModal}>
        Отметить
      </a>

      <Modal show={showModal[message_id]} onHide={changeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Вы уверены, что обращение #{message_id} решена?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextArea label="Сообщение" value={message} readOnly={true} />
        </Modal.Body>
        <Modal.Footer
          className="justify-content-center"
          style={{ gap: "2rem" }}
        >
          <Button variant="secondary" onClick={changeModal}>
            Отмена
          </Button>
          <Button variant="primary" onClick={modelPrinted}>
            {isLoading ? <Spinner /> : "Решена"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
