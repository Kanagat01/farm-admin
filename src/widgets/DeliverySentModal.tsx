import { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { apiInstance } from "~/shared/api";

export function DeliverySentModal({ delivery_order_id, removeObj }: any) {
  const [showModal, setShowModal] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);

  const changeModal = () => {
    setShowModal({
      ...showModal,
      [delivery_order_id]: !showModal[delivery_order_id],
    });
  };

  const deliverySent = () => {
    setIsLoading(true);
    apiInstance
      .post("/api_admin/delivery_order_sent/", {
        delivery_order_id: delivery_order_id,
      }) // @ts-ignore
      .then((response) => {
        toast.success(`Доставка #${delivery_order_id} отмечена отправленной`);
        removeObj(delivery_order_id);
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

      <Modal show={showModal[delivery_order_id]} onHide={changeModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h2 className="title-md mb-0 text-center">
            Вы уверены, что доставка #{delivery_order_id} отправлена?
          </h2>
        </Modal.Body>
        <Modal.Footer
          className="justify-content-center"
          style={{ gap: "2rem" }}
        >
          <Button variant="secondary" onClick={changeModal}>
            Отмена
          </Button>
          <Button variant="primary" onClick={deliverySent}>
            {isLoading ? <Spinner /> : "Отправлено"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
