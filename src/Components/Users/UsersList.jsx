import { useState } from "react";
import { NavLink, generatePath } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
import Icon from "@mdi/react";
import {
    mdiArrowRightThick,
    mdiFilter,
    mdiBlockHelper, 
    mdiAccountPlus,
    mdiDownload,
    mdiSend
} from "@mdi/js";
import UserForm from "./UserForm";
import { USER_ROUTE } from "../../utils/consts";
import { getUsers } from "../../utils/api_connection";

export default function UsersList() {
    const columns = ["ID", "Имя", "Никнейм", "Тип подписки", ""];
    const headers = [
        { label: "ID", key: "id" },
        { label: "Полное Имя", key: "name" },
        { label: "О себе", key: "description" },
        { label: "Имя Пользователя", key: "username" },
        { label: "Email", key: "email" },
        { label: "Тип подписки", key: "subscription_type" },
        { label: "Номер телефона", key: "phone" },
        { label: "Дата рождения", key: "birthday" },
        { label: "Пол", key: "gender" },
        { label: "Фото", key: "photo" },
        { label: "Другие аккаунты", key: "other_accounts" },
    ];
    const users = getUsers();
    const [showFilterModal, setShowFilterModal] = useState(false);
    const changeFilterModal = () => {
        setShowFilterModal(!showFilterModal);
    };
    const [showCreateUserModal, setShowCreateUserModal] = useState(false);
    const changeCreateUserModal = () => {
        setShowCreateUserModal(!showCreateUserModal);
    };

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
                {/* Filter btn and modal */}
                <>
                    <button
                        className='btn btn-primary rounded-btn py-2 ms-5'
                        onClick={changeFilterModal}
                    >
                        <Icon
                            path={mdiFilter}
                            style={{ height: "1.5rem", width: "1.5rem" }}
                        />
                    </button>

                    <Modal show={showFilterModal} onHide={changeFilterModal}>
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
                                onClick={changeFilterModal}
                            >
                                Сбросить
                            </Button>
                            <Button
                                variant='primary'
                                onClick={changeFilterModal}
                            >
                                Применить
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                {/* CreateUser btn and modal */}
                <>
                    <button
                        className='btn btn-primary rounded-btn d-flex align-items-center py-2 ms-3'
                        onClick={changeCreateUserModal}
                    >
                        <span className='me-2'>Создать</span>
                        <Icon
                            path={mdiAccountPlus}
                            style={{ height: "1.5rem", width: "1.5rem" }}
                        />
                    </button>

                    <Modal
                        show={showCreateUserModal}
                        onHide={changeCreateUserModal}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Создать пользователя</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <UserForm />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant='secondary'
                                onClick={changeCreateUserModal}
                            >
                                Отмена
                            </Button>
                            <Button
                                variant='primary'
                                onClick={changeCreateUserModal}
                            >
                                Создать
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                {/* Export users */}
                <CSVLink
                    data={users}
                    headers={headers}
                    className='btn btn-primary rounded-btn d-flex align-items-center py-2 ms-3'
                >
                    <span className='me-2'>Экспортировать</span>
                    <Icon
                        path={mdiDownload}
                        style={{ height: "1.5rem", width: "1.5rem" }}
                    />
                </CSVLink>
                {/* Mailing */}
                <>
                    <button className='btn btn-primary rounded-btn d-flex align-items-center py-2 ms-3'>
                        <span className='me-2'>Сделать рассылку</span>
                        <Icon
                            path={mdiSend}
                            style={{ height: "1.5rem", width: "1.5rem" }}
                        />
                    </button>
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
                                        user.subscription_type === "premium"
                                            ? "badge badge-premium"
                                            : "badge badge-standart"
                                    }
                                >
                                    {user.subscription_type === "premium"
                                        ? "Премиум"
                                        : "Стандарт"}
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
