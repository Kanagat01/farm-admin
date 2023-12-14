import React from 'react'
import { getOrders } from '../../utils/api_connection';
import { NavLink, generatePath } from "react-router-dom";
import { ORDER_ROUTE } from '../../utils/consts';

export default function Order(){
    const columns = ["ID", "Имя заказа", "Цена"];
    const orders = getOrders();
    return (
      <div className="main">
            <div class='table-title'>
                Выберите заказ для редактирования
            </div>
            <table class='table table-stretched mt-5'>
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
                            <td>{order.id}</td>
                            <td>
                                <NavLink
                                    to={(ORDER_ROUTE, {
                                        order_id: order.id,
                                    })}
                                    className='table-link'
                                >
                                    {order.name}
                                </NavLink>
                            </td>
                            <td>{order.cost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
      </div>
    )
}
