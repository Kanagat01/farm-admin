import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiGauge,
  mdiAccountMultiple,
  mdiCart,
  mdiLeaf,
  mdiCubeOutline,
  mdiMessageProcessing,
  mdiHome,
  mdiTruck,
} from "@mdi/js";
import { routes } from "~/shared/router";

export function Sidebar() {
  const list_elements = [
    {
      route: "/",
      name: "Главная",
      icon: mdiHome,
    },
    {
      route: routes.USERS_ROUTE,
      name: "Пользователи",
      icon: mdiAccountMultiple,
    },
    {
      route: routes.PLANTED_SEEDS_ROUTE,
      name: "Фермы",
      icon: mdiLeaf,
    },
    {
      route: routes.PRINTERS_ROUTE,
      name: "3D принтеры",
      icon: mdiCubeOutline,
    },
    {
      route: routes.MARKETPLACE_ROUTE,
      name: "Маркетплейс",
      icon: mdiGauge,
    },
    {
      route: routes.ORDERS_ROUTE,
      name: "Заказы",
      icon: mdiCart,
    },
    {
      route: routes.LOGISTICS_ROUTE,
      name: "Логистика",
      icon: mdiTruck,
    },
    {
      route: routes.SUPPORT_MESSAGES_ROUTE,
      name: "Обращения в поддержку",
      icon: mdiMessageProcessing,
    },
  ];
  return (
    <>
      <div className="sidebar">
        <ul className="vertical-list">
          {list_elements.map((el) => (
            <li key={list_elements.indexOf(el)}>
              <NavLink
                to={el.route}
                className={({ isActive }) =>
                  isActive ? "sidebar-link active" : "sidebar-link"
                }
              >
                <Icon path={el.icon} size={1.2} />
                <span>{el.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ width: "fit-content", paddingRight: "1rem" }}
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="ms-auto btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ fontSize: "1.5rem" }}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="vertical-list">
            {list_elements.map((el) => (
              <li key={list_elements.indexOf(el)}>
                <NavLink
                  to={el.route}
                  className={({ isActive }) =>
                    isActive ? "sidebar-link active" : "sidebar-link"
                  }
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
