import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiBlockHelper, mdiAccountPlus } from "@mdi/js";

import { getAdmins } from "../utils/api_connection";

export default function AdminsList() {
    const columns = ["ID", "Имя", "Никнейм", "Роль", ""];
    const admins = getAdmins();
    const [showCreateadminModal, setShowCreateadminModal] = useState(false);
    const changeCreateadminModal = () => {
        setShowCreateadminModal(!showCreateadminModal);
    };

    const [showBlockModal, setshowBlockModal] = useState({});

    const handleCloseBlockModal = (adminId) => {
        setshowBlockModal((prevState) => ({
            ...prevState,
            [adminId]: false,
        }));
    };

    const handleShowBlockModal = (adminId) => {
        setshowBlockModal((prevState) => ({
            ...prevState,
            [adminId]: true,
        }));
    };

    return (
        <div className='main'>
            <div className='table-title my-4'>Список админов</div>
            <table class='table table-stretched'>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {admins.map((admin) => (
                        <tr key={admin.id}>
                            <td>{admin.id}</td>
                            <td>{admin.name}</td>
                            <td>{admin.username}</td>
                            <td>{admin.role}</td>
                            <td>
                                <>
                                    <button
                                        className='btn-without-bg'
                                        onClick={() =>
                                            handleShowBlockModal(admin.id)
                                        }
                                    >
                                        <Icon
                                            path={mdiBlockHelper}
                                            size={1.2}
                                            color={"var(--outline-danger)"}
                                        />
                                    </button>

                                    <Modal
                                        show={showBlockModal[admin.id]}
                                        onHide={() =>
                                            handleCloseBlockModal(admin.id)
                                        }
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                Заблокировать админа
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h2 className='title-md'>
                                                Вы уверены, что хотите
                                                заблокировать админа #{admin.id}{" "}
                                                {admin.name}?
                                            </h2>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button
                                                variant='secondary'
                                                onClick={() =>
                                                    handleCloseBlockModal(
                                                        admin.id
                                                    )
                                                }
                                            >
                                                Отмена
                                            </Button>
                                            <Button
                                                variant='primary'
                                                onClick={() =>
                                                    handleCloseBlockModal(
                                                        admin.id
                                                    )
                                                }
                                            >
                                                Заблокировать
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
