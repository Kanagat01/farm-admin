import { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { apiInstance } from "~/shared/api";

export function PrintedModal({ id, printerObj, removeObj }: any) {
  let { printing_model_id, model_name } = printerObj;
  const [showModal, setShowModal] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);

  const changeModal = () => {
    setShowModal({ ...showModal, [id]: !showModal[id] });
  };

  const modelPrinted = () => {
    setIsLoading(true);
    apiInstance
      .post("/api_admin/model_printed/", {
        printing_model_id: printing_model_id,
      }) // @ts-ignore
      .then((response) => {
        toast.success("Модель отмечена готовым");
        removeObj(printerObj);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setIsLoading(false);
      });
    changeModal();
  };

  return (
    <>
      <ToastContainer />
      <a className="table-link" onClick={changeModal}>
        Отметить
      </a>

      <Modal show={showModal[id]} onHide={changeModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h2 className="title-md mb-0 text-center">
            Вы уверены, что модель {model_name} готово?
          </h2>
        </Modal.Body>
        <Modal.Footer
          className="justify-content-center"
          style={{ gap: "2rem" }}
        >
          <Button variant="secondary" onClick={changeModal}>
            Отмена
          </Button>
          <Button variant="primary" onClick={modelPrinted}>
            {isLoading ? <Spinner /> : "Напечатано"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
