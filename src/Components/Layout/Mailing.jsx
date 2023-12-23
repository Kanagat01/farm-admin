import { useState } from "react";
import Icon from "@mdi/react";
import { mdiSend } from "@mdi/js";
import { Modal, Button } from "react-bootstrap";

import Input from "./Input";

export default function Mailing() {
    const [showMailingModal, setShowMailingModal] = useState(false);
    const changeMailingModal = () => {
        setShowMailingModal(!showMailingModal);
    };

    const mailing_inputs = [
        {
            label: "Категория пользователей",
            type: "radio",
            name: "users_category",
            radio_inputs: [
                { label: "Все", value: "all" },
                { label: "Категория 1", value: "category1" },
                { label: "Категория 2", value: "category2" },
            ],
        },
        {
            label: "Текст рассылки",
            type: "textarea",
            name: "mailing_text",
        },
    ];

    return (
        <>
            <button
                className='btn btn-primary rounded-btn d-flex align-items-center py-2'
                onClick={changeMailingModal}
            >
                <span className='me-2'>Рассылка</span>
                <Icon
                    path={mdiSend}
                    style={{ height: "1.5rem", width: "1.5rem" }}
                />
            </button>
            <Modal show={showMailingModal} onHide={changeMailingModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Сделать новую рассылку</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {mailing_inputs.map((el) => (
                        <Input
                            name={el.name}
                            label={el.label}
                            type={el.type}
                            value={el.value}
                            radio_inputs={el.radio_inputs}
                            onChange={el.onChange}
                        />
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={changeMailingModal}>
                        Отмена
                    </Button>
                    <Button variant='primary' onClick={changeMailingModal}>
                        Отправить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
