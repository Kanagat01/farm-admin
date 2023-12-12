import { useState } from "react";
import { NavLink, generatePath } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiArrowRightThick, mdiFilter, mdiBlockHelper } from "@mdi/js";

import { USER_ROUTE } from "../../utils/consts";

import "../../styles/table.css";

export default function UsersList() {
    const columns = ["ID", "Имя", "Никнейм", "Тип подписки", ""];
    const users = [
        {
            id: 1,
            name: "Иван Иванов",
            username: "Ivan01",
            subscription_type: "Стандарт",
        },
        {
            id: 2,
            name: "Петр Петров",
            username: "Peter02",
            subscription_type: "Премиум",
        },
        {
            id: 3,
            name: "Мария Сидорова",
            username: "Maria03",
            subscription_type: "Стандарт",
        },
        {
            id: 4,
            name: "Анна Кузнецова",
            username: "Anna04",
            subscription_type: "Премиум",
        },
        {
            id: 5,
            name: "Алексей Николаев",
            username: "Alex05",
            subscription_type: "Стандарт",
        },
    ];
    const [showFilterModal, setShowFilterModal] = useState(false);

    const handleFilterModalClose = () => setShowFilterModal(false);
    const handleFilterModalShow = () => setShowFilterModal(true);

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
                            <Icon path={mdiArrowRightThick} size={0.8} />
                        </button>
                    </div>
                </form>
                <>
                    <Button
                        className='btn btn-primary rounded-btn py-1 ms-5'
                        onClick={handleFilterModalShow}
                    >
                        <Icon path={mdiFilter} size={0.8} />
                    </Button>

                    <Modal
                        show={showFilterModal}
                        onHide={handleFilterModalClose}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Фильтр</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h2 className='title-md'>По типу подписки</h2>
                            <div class='btn-group mb-0'>
                                <label
                                    htmlFor='standart'
                                    class='btn btn-outline-info'
                                >
                                    <input
                                        type='radio'
                                        name='subscription_type'
                                        id='standart'
                                        value='standart'
                                    />
                                    Стандарт
                                </label>
                                <label
                                    htmlFor='premium'
                                    class='btn btn-outline-info'
                                >
                                    <input
                                        type='radio'
                                        name='subscription_type'
                                        id='premium'
                                        value='premium'
                                    />
                                    Премиум
                                </label>
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
                                    <button className='btn-without-bg'>
                                        <Icon
                                            path={mdiBlockHelper}
                                            size={0.8}
                                            color={"var(--outline-danger)"}
                                        />
                                    </button>

                                    <Modal>
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                Заблокировать пользователя
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h2 className='title-md'>
                                                Заблокировать пользователя #
                                                {user.id} {user.name}. Вы
                                                уверены?
                                            </h2>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant='secondary'>
                                                Отмена
                                            </Button>
                                            <Button variant='primary'>
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
