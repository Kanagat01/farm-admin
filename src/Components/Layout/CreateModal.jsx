import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { Modal, Button } from "react-bootstrap";

import DetailForm from "./DetailForm";

export default function CreateModal(props) {
    const { relInfo, title } = props;
    const [showCreateObjModal, setShowCreateObjModal] = useState(false);
    const changeCreateObjModal = () => {
        setShowCreateObjModal(!showCreateObjModal);
    };
    return (
        <>
            <button
                className='btn btn-primary rounded-btn d-flex align-items-center py-2'
                onClick={changeCreateObjModal}
            >
                <span className='me-2'>Создать</span>
                <Icon
                    path={mdiPlus}
                    style={{ height: "2.5rem", width: "2.5rem" }}
                />
            </button>

            <Modal show={showCreateObjModal} onHide={changeCreateObjModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Создать {title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DetailForm isCreateMode={true} relatedInfo={relInfo} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={changeCreateObjModal}>
                        Отмена
                    </Button>
                    <Button variant='primary' onClick={changeCreateObjModal}>
                        Создать
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
