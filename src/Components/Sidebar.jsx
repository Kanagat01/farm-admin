import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiGauge, mdiAccountMultiple } from "@mdi/js";
import { DASHBOARD_ROUTE, USERS_ROUTE } from "../utils/consts";
import "../styles/Sidebar.css";

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
                            <Icon path={el.icon} size={0.8} />
                            <span>{el.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
