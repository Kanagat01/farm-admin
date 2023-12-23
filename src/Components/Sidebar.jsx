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
    MODELS_ROUTE,
} from "../utils/routes";

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
            route: MODELS_ROUTE,
            name: "Модели",
            icon: mdiCubeOutline,
        },
    ];
    return (
        <>
            <div className='sidebar'>
                <ul className='vertical-list'>
                    {list_elements.map((el) => (
                        <li key={list_elements.indexOf(el)}>
                            <NavLink
                                to={el.route}
                                className='sidebar-link'
                                activeclassname='active'
                            >
                                <Icon path={el.icon} size={1.2} />
                                <span>{el.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className='offcanvas offcanvas-start'
                tabIndex='-1'
                id='offcanvasExample'
                aria-labelledby='offcanvasExampleLabel'
                style={{ width: "fit-content", paddingRight: "1rem" }}
            >
                <div className='offcanvas-header'>
                    <button
                        type='button'
                        className='ms-auto btn-close'
                        data-bs-dismiss='offcanvas'
                        aria-label='Close'
                        style={{ fontSize: "1.5rem" }}
                    ></button>
                </div>
                <div className='offcanvas-body'>
                    <ul className='vertical-list'>
                        {list_elements.map((el) => (
                            <li key={list_elements.indexOf(el)}>
                                <NavLink
                                    to={el.route}
                                    className='sidebar-link'
                                    activeclassname='active'
                                >
                                    <Icon path={el.icon} size={1.2} />
                                    <span>{el.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
