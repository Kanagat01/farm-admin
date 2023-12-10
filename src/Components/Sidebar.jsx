import { NavLink } from "react-router-dom";
import { DASHBOARD_ROUTE, USERS_ROUTE } from "../utils/consts";
import "../styles/Sidebar.css";

function Sidebar() {
    const list_elements = [
        {
            route: DASHBOARD_ROUTE,
            name: "Дашборд",
        },
        {
            route: USERS_ROUTE,
            name: "Пользователи",
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
                            {el.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
