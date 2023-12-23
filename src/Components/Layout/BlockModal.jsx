import { useState } from "react";
import Icon from "@mdi/react";
import { mdiBlockHelper } from "@mdi/js";
import { Modal, Button } from "react-bootstrap";

export default function BlockModal(props) {
    const { obj, title } = props;
    const [showBlockModal, setShowBlockModal] = useState({});

    const changeBlockModal = () => {
        obj.is_banned = !obj.is_banned;
        setShowBlockModal(!showBlockModal);
    };

    return (
        <>
            <button
                className='btn-without-bg'
                onClick={() => changeBlockModal()}
            >
                <Icon
                    path={mdiBlockHelper}
                    size={1.2}
                    color={"var(--outline-danger)"}
                />
            </button>

            <Modal
                show={showBlockModal[obj.id]}
                onHide={() => changeBlockModal()}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Заблокировать {title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 className='title-md'>
                        Вы уверены, что хотите заблокировать {title} #{obj.id}{" "}
                        {obj.name}?
                    </h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant='secondary'
                        onClick={() => changeBlockModal()}
                    >
                        Отмена
                    </Button>
                    <Button
                        variant='primary'
                        onClick={() => changeBlockModal()}
                    >
                        Заблокировать
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
