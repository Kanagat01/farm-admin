import React from 'react'
import { NavLink, generatePath } from "react-router-dom";
import { USER_ROUTE } from "../../utils/consts";
import { getUsers } from "../../utils/api_connection";

export default function PostDetails() {
    const columns = ["ID", "Имя", "Никнейм", "Тип подписки", ""];
    const users = getUsers();

    return (
        <div>
            <div className='table-title my-4'>Пользователи:</div>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
