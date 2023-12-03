import "../styles/table.css";
import Icon from "@mdi/react";
import { mdiArrowRightThick } from "@mdi/js";

export default function UsersList() {
    return (
        <div className='main'>
            <div className='table-title my-4'>
                Выберите пользователя для изменения
            </div>
            <form action='#' class='search-box my-4'>
                <div class='input-group'>
                    <input
                        type='text'
                        class='form-control'
                        id='inlineFormInputGroup'
                        placeholder='Искать по ID, Имя или Никнейм'
                        autocomplete='off'
                    />
                    <button
                        class='btn btn-primary rounded-btn d-inline-flex align-items-center justify-content-center'
                        type='submit'
                    >
                        <Icon path={mdiArrowRightThick} size={0.8} />
                    </button>
                </div>
            </form>
            <table class='table table-stretched'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Никнейм</th>
                        <th>Тип подписки</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <a href='!#' className='table-link'>
                                Иван Иванов
                            </a>
                        </td>
                        <td>Ivan01</td>
                        <td>
                            <div class='badge badge-standart'>Стандарт</div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <a href='!#' className='table-link'>
                                Иван Иванов
                            </a>
                        </td>
                        <td>Ivan01</td>
                        <td>
                            <div class='badge badge-premium'>Премиум</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
