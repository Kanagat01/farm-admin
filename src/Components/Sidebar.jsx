import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import {
    mdiGauge,
    mdiAccountMultiple,
    mdiAccountSupervisor,
    mdiWalletGiftcard,
    mdiLeaf,
    mdiCubeOutline,
} from "@mdi/js";
import {
    DASHBOARD_ROUTE,
    USERS_ROUTE,
    ADMINS_ROUTE,
    ORDERS_ROUTE,
    CULTURES_ROUTE,
    MODELS_ROUTE,
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
            route: ORDERS_ROUTE,
            name: "Заказы",
            icon: mdiWalletGiftcard,
        },
        {
            route: CULTURES_ROUTE,
            name: "Культуры",
            icon: mdiLeaf,
        },
        {
            route: MODELS_ROUTE,
            name: "Модели",
            icon: mdiCubeOutline,
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
