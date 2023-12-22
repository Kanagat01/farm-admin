import { useState } from "react";
import { NavLink, generatePath } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { getModels } from "../../utils/api_connection";
import { MODEL_ROUTE } from "../../utils/consts";
import ModelForm from "../Forms/ModelForm";
import { truncateString } from "../../utils/filters";

export default function ModelsList() {
    const columns = [
        "ID",
        "Название",
        "Описание",
        "Время добавления",
        "Вес файла",
    ];
    const models = getModels();
    const [showCreateModelModal, setShowCreateModelModal] = useState(false);
    const changeCreateModelModal = () => {
        setShowCreateModelModal(!showCreateModelModal);
    };

    return (
        <div className='main'>
            <div className='d-flex align-items-center'>
                <div className='table-title my-4'>
                    Выберите модель для изменения
                </div>
                <>
                    <button
                        className='btn btn-primary rounded-btn d-flex align-items-center py-2 ms-4'
                        onClick={changeCreateModelModal}
                    >
                        <span className='me-2'>Создать</span>
                        <Icon
                            path={mdiPlus}
                            style={{ height: "1.5rem", width: "1.5rem" }}
                        />
                    </button>

                    <Modal
                        show={showCreateModelModal}
                        onHide={changeCreateModelModal}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Создать модель</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ModelForm />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant='secondary'
                                onClick={changeCreateModelModal}
                            >
                                Отмена
                            </Button>
                            <Button
                                variant='primary'
                                onClick={changeCreateModelModal}
                            >
                                Создать
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
            <table className='table table-stretched'>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {models.map((model) => (
                        <tr key={model.id}>
                            <td>{model.id}</td>
                            <td>
                                <NavLink
                                    to={generatePath(MODEL_ROUTE, {
                                        model_id: model.id,
                                    })}
                                    className='table-link'
                                >
                                    {model.name}
                                </NavLink>
                            </td>
                            <td>{truncateString(model.description)}</td>
                            <td>{model.timestamp}</td>
                            <td>{model.model_size}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
