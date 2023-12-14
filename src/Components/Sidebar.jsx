import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import {
    mdiGauge,
    mdiAccountMultiple,
    mdiAccountSupervisor,
    mdiWalletGiftcard,
} from "@mdi/js";
import {
    DASHBOARD_ROUTE,
    USERS_ROUTE,
    ADMINS_ROUTE,
    ORDER_ROUTE,
} from "../utils/consts";

function Sidebar() {
    const list_elements = [
        {
            route: DASHBOARD_ROUTE,
            name: "Дашборд",
            icon: mdiGauge,
        },
        {
            route: USERS_ROUTE,
            name: "Пользователи",
            icon: mdiAccountMultiple,
        },
        {
            route: ADMINS_ROUTE,
            name: "Админы",
            icon: mdiAccountSupervisor,
        },
        {
            route: ORDER_ROUTE,
            name: "Заказ",
            icon: mdiWalletGiftcard,
        },
    ];
    return (
        <div className='sidebar'>
            <ul className='vertical-list'>
                {list_elements.map((el) => (
                    <li>
                        <NavLink
                            to={el.route}
                            className='sidebar-link'
                            activeClassName='active'
                        >
                            <Icon path={el.icon} size={1.2} />
                            <span>{el.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
