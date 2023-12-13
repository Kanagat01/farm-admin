import { useState } from "react";
import { NavLink, generatePath } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiArrowRightThick, mdiFilter, mdiBlockHelper } from "@mdi/js";

import { USER_ROUTE } from "../../utils/consts";
import { getUsers } from "../../utils/api_connection";

export default function UsersList() {
    const columns = ["ID", "Имя", "Никнейм", "Тип подписки", ""];
    const users = getUsers();
    const [showFilterModal, setShowFilterModal] = useState(false);

    const handleFilterModalClose = () => setShowFilterModal(false);
    const handleFilterModalShow = () => setShowFilterModal(true);

    const [showBlockModal, setshowBlockModal] = useState({});

    const handleCloseBlockModal = (userId) => {
        setshowBlockModal((prevState) => ({
            ...prevState,
            [userId]: false,
        }));
    };

    const handleShowBlockModal = (userId) => {
        setshowBlockModal((prevState) => ({
            ...prevState,
            [userId]: true,
        }));
    };

    return (
        <div className='main'>
            <div className='table-title my-4'>
                Выберите пользователя для изменения
            </div>
            <div className='d-flex align-items-center'>
                <form action='#' class='search-box my-4'>
                    <div class='input-group'>
                        <input
                            type='text'
                            class='form-control'
                            id='inlineFormInputGroup'
                            placeholder='Искать по ID, Имя или Никнейм'
                            autocomplete='off'
                        />
                        <button
                            class='btn btn-primary rounded-btn d-inline-flex align-items-center justify-content-center'
                            type='submit'
                        >
                            <Icon path={mdiArrowRightThick} size={1} />
                        </button>
                    </div>
                </form>
                <>
                    <Button
                        className='btn btn-primary rounded-btn py-2 ms-5'
                        onClick={handleFilterModalShow}
                    >
                        <Icon
                            path={mdiFilter}
                            style={{ height: "1.5rem", width: "1.5rem" }}
                        />
                    </Button>

                    <Modal
                        show={showFilterModal}
                        onHide={handleFilterModalClose}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Фильтр</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='d-flex align-items-center'>
                                <h2 className='title-md my-0'>
                                    По типу подписки
                                </h2>
                                <div class='custom-radio-inputs ms-3'>
                                    <label>
                                        <input
                                            type='radio'
                                            name='subscription_type'
                                            value='standart'
                                        />
                                        <span>Стандарт</span>
                                    </label>
                                    <label>
                                        <input
                                            type='radio'
                                            name='subscription_type'
                                            value='premium'
                                        />
                                        <span>Премиум</span>
                                    </label>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant='secondary'
                                onClick={handleFilterModalClose}
                            >
                                Сбросить
                            </Button>
                            <Button
                                variant='primary'
                                onClick={handleFilterModalClose}
                            >
                                Применить
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
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                                <NavLink
                                    to={generatePath(USER_ROUTE, {
                                        user_id: user.id,
                                    })}
                                    className='table-link'
                                >
                                    {user.name}
                                </NavLink>
                            </td>
                            <td>{user.username}</td>
                            <td>
                                <div
                                    className={
                                        user.subscription_type === "Премиум"
                                            ? "badge badge-premium"
                                            : "badge badge-standart"
                                    }
                                >
                                    {user.subscription_type}
                                </div>
                            </td>
                            <td>
                                <>
                                    <button
                                        className='btn-without-bg'
                                        onClick={() =>
                                            handleShowBlockModal(user.id)
                                        }
                                    >
                                        <Icon
                                            path={mdiBlockHelper}
                                            size={1.2}
                                            color={"var(--outline-danger)"}
                                        />
                                    </button>

                                    <Modal
                                        show={showBlockModal[user.id]}
                                        onHide={() =>
                                            handleCloseBlockModal(user.id)
                                        }
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                Заблокировать пользователя
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h2 className='title-md'>
                                                Вы уверены, что хотите
                                                заблокировать пользователя #
                                                {user.id} {user.name}?
                                            </h2>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button
                                                variant='secondary'
                                                onClick={() =>
                                                    handleCloseBlockModal(
                                                        user.id
                                                    )
                                                }
                                            >
                                                Отмена
                                            </Button>
                                            <Button
                                                variant='primary'
                                                onClick={() =>
                                                    handleCloseBlockModal(
                                                        user.id
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
