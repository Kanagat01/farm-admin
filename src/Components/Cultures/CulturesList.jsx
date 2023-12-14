import { useState } from "react";
import { NavLink, generatePath } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Icon from "@mdi/react";
import { getCultures } from "../../utils/api_connection";
import { CULTURE_ROUTE } from "../../utils/consts";
import CultureForm from "./CultureForm";
import { mdiPlus } from "@mdi/js";

export default function CulturesList() {
    const columns = [
        "ID",
        "Название",
        "Описание",
        "Семейство растений",
        "Количество уровней",
    ];
    const cultures = getCultures();
    const [showCreateCultureModal, setShowCreateCultureModal] = useState(false);
    const changeCreateCultureModal = () => {
        setShowCreateCultureModal(!showCreateCultureModal);
    };

    return (
        <div className='main'>
            <div className='d-flex align-items-center'>
                <div className='table-title my-4'>
                    Выберите культуру для изменения
                </div>
                <>
                    <button
                        className='btn btn-primary rounded-btn d-flex align-items-center py-2 ms-4'
                        onClick={changeCreateCultureModal}
                    >
                        <span className='me-2'>Создать</span>
                        <Icon
                            path={mdiPlus}
                            style={{ height: "1.5rem", width: "1.5rem" }}
                        />
                    </button>

                    <Modal
                        show={showCreateCultureModal}
                        onHide={changeCreateCultureModal}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Создать культуру</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <CultureForm />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant='secondary'
                                onClick={changeCreateCultureModal}
                            >
                                Отмена
                            </Button>
                            <Button
                                variant='primary'
                                onClick={changeCreateCultureModal}
                            >
                                Создать
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
            <table class='table table-stretched'>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {cultures.map((culture) => (
                        <tr key={culture.id}>
                            <td>{culture.id}</td>
                            <td>
                                <NavLink
                                    to={generatePath(CULTURE_ROUTE, {
                                        culture_id: culture.id,
                                    })}
                                    className='table-link'
                                >
                                    {culture.name}
                                </NavLink>
                            </td>
                            <td>{culture.description}</td>
                            <td>{culture.family_of_plants}</td>
                            <td>{culture.levels}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
