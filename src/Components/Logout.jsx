import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/routes";

export default function Footer() {
    return (
        <div className='main'>
            <h2>
                Вы успешно вышли из аккаунта. Вы можете{" "}
                <NavLink to={LOGIN_ROUTE}>войти</NavLink> заново
            </h2>
        </div>
    );
}
