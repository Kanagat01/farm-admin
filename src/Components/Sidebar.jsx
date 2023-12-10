import "../styles/Sidebar.css";

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul class='vertical-list'>
                <li>
                    <a href='#' class='sidebar-link active'>
                        Главная
                    </a>
                </li>
                <li>
                    <a href='#' class='sidebar-link'>
                        Новости
                    </a>
                </li>
                <li>
                    <a href='#' class='sidebar-link'>
                        Эфиры
                    </a>
                </li>
                <li>
                    <a href='#' class='sidebar-link'>
                        Услуги
                    </a>
                </li>
                <li>
                    <a href='#' class='sidebar-link'>
                        Практики
                    </a>
                </li>
                <li>
                    <a href='#' class='sidebar-link'>
                        Управление пользователями
                    </a>
                </li>
                <li>
                    <a href='#' class='sidebar-link'>
                        Обсуждения
                    </a>
                </li>
                <li>
                    <a href='#' class='sidebar-link'>
                        Сообщения
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
