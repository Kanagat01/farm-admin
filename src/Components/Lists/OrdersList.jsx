import React from "react";
import { getOrders, getUser } from "../../utils/api_connection";
import { NavLink, generatePath } from "react-router-dom";
import { ORDER_ROUTE, USER_ROUTE } from "../../utils/consts";

export default function OrdersList() {
    const columns = ["ID", "Владелец", "Дата создания", "Сумма", "Оплачено"];
    const orders = getOrders();
    return (
        <div className='main'>
            <div className='table-title'>Выберите заказ для редактирования</div>
            <table className='table table-stretched mt-5'>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>
                                <NavLink
                                    to={generatePath(ORDER_ROUTE, {
                                        order_id: order.id,
                                    })}
                                    className='table-link'
                                >
                                    {order.id}
                                </NavLink>
                            </td>
                            <td>
                                <NavLink
                                    to={generatePath(USER_ROUTE, {
                                        user_id: order.owner_id,
                                    })}
                                    className='table-link'
                                >
                                    {getUser(order.owner_id).name}
                                </NavLink>
                            </td>
                            <td>{order.date}</td>
                            <td>{order.price}</td>
                            <td>{order.is_paidfor ? "Да" : "Нет"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
