import Icon from "@mdi/react";
import { mdiArrowRightThick } from "@mdi/js";
import { NavLink, generatePath } from "react-router-dom";

import { USER_ROUTE } from "../../utils/consts";

import "../../styles/table.css";

export default function UsersList() {
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

    return (
        <div className='main'>
            <div className='table-title my-4'>
                Выберите пользователя для изменения
            </div>
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
            <table class='table table-stretched'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Никнейм</th>
                        <th>Тип подписки</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
