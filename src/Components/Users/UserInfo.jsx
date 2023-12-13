import React from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../utils/api_connection";

export default function UserInfo() {
    const { user_id } = useParams();
    let user = getUser(parseInt(user_id, 10));

    if (!user) {
        return <h1>404 Пользователь не найден</h1>;
    }
    return (
        <div className='main'>
            <form className='row g-3 needs-validation p-3' noValidate=''>
                <div class='table-title my-4'>
                    Информация о пользователе #{user.id} {user.name}
                </div>
                <div className='info-block'>
                    <div class='form-group input-rounded row d-flex align-items-center'>
                        <div className='col-md-3 d-flex justify-content-end'>
                            <label htmlFor='full_name'>Имя</label>
                        </div>
                        <div className='col-md-9'>
                            <input
                                type='text'
                                name='full_name'
                                class='form-control'
                                value={user.name}
                            />
                        </div>
                    </div>
                    <div class='form-group input-rounded row d-flex align-items-center'>
                        <div className='col-md-3 d-flex justify-content-end'>
                            <label htmlFor='photo'>Фото</label>
                        </div>
                        <div className='col-md-9'>
                            <div className='row'>
                                <div className='col-3 d-flex align-items-center'>
                                    <a href={user.photo} className='photo-link'>
                                        {user.photo.split("/").slice(-1)[0]}
                                    </a>
                                </div>
                                <div className='col-9 d-flex align-items-center'>
                                    <input
                                        type='file'
                                        name='photo'
                                        className='form-control'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='form-group input-rounded row d-flex align-items-center'>
                        <div className='col-md-3 d-flex justify-content-end'>
                            <label htmlFor='email'>Электронная почта</label>
                        </div>
                        <div className='col-md-9'>
                            <input
                                type='email'
                                name='email'
                                class='form-control'
                                value={user.email}
                            />
                        </div>
                    </div>
                    <div class='form-group input-rounded row d-flex align-items-center'>
                        <div className='col-md-3 d-flex justify-content-end'>
                            <label htmlFor='description'>О себе</label>
                        </div>
                        <div className='col-md-9'>
                            <textarea
                                name='description'
                                class='form-control'
                                value={user.description}
                            ></textarea>
                        </div>
                    </div>
                    <div class='form-group input-rounded row d-flex align-items-center'>
                        <div className='col-md-3 d-flex justify-content-end'>
                            <label htmlFor='username'>Имя пользователя</label>
                        </div>
                        <div className='col-md-9'>
                            <input
                                type='text'
                                name='username'
                                class='form-control'
                                value={user.username}
                            />
                        </div>
                    </div>
                    <div class='form-group input-rounded row d-flex align-items-center'>
                        <div className='col-md-3 d-flex justify-content-end'>
                            <label htmlFor='subscription_type'>
                                Статус подписки
                            </label>
                        </div>
                        <div className='col-md-9'>
                            <div class='custom-radio-inputs'>
                                <label>
                                    <input
                                        type='radio'
                                        name='subscription_type'
                                        value='standart'
                                        checked={
                                            user.subscription_type ===
                                            "standart"
                                        }
                                    />
                                    <span>Стандарт</span>
                                </label>
                                <label>
                                    <input
                                        type='radio'
                                        name='subscription_type'
                                        value='premium'
                                        checked={
                                            user.subscription_type === "premium"
                                        }
                                    />
                                    <span>Премиум</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class='form-group input-rounded row d-flex align-items-center'>
                        <div className='col-md-3 d-flex justify-content-end'>
                            <label htmlFor='phone'>Номер телефона</label>
                        </div>
                        <div className='col-md-9'>
                            <input
                                type='text'
                                name='phone'
                                class='form-control'
                                value={user.phone}
                            />
                        </div>
                    </div>
                    <div class='form-group input-rounded row d-flex align-items-center'>
                        <div className='col-md-3 d-flex justify-content-end'>
                            <label htmlFor='birthday'>Дата рождения</label>
                        </div>
                        <div className='col-md-9'>
                            <input
                                type='date'
                                className='form-control'
                                id='birthday'
                                name='birthday'
                                value={user.birthday}
                            />
                        </div>
                    </div>
                    <div class='form-group input-rounded row d-flex align-items-center'>
                        <div className='col-md-3 d-flex justify-content-end'>
                            <label htmlFor='gender'>Пол</label>
                        </div>
                        <div className='col-md-9'>
                            <div class='custom-radio-inputs'>
                                <label>
                                    <input
                                        type='radio'
                                        name='gender'
                                        value='male'
                                        checked={user.gender === "male"}
                                    />
                                    <span>М</span>
                                </label>
                                <label>
                                    <input
                                        type='radio'
                                        name='gender'
                                        value='female'
                                        checked={
                                            user.subscription_type === "female"
                                        }
                                    />
                                    <span>Ж</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class='form-group input-rounded row d-flex align-items-center'>
                        <div className='col-md-3 d-flex justify-content-end'>
                            <label htmlFor='other_accounts'>
                                Другие аккаунты
                            </label>
                        </div>
                        <div className='col-md-9'>
                            <input
                                type='text'
                                name='other_accounts'
                                class='form-control'
                                value={user.name}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className='buttons-group justify-content-end'>
                        <button className='btn btn-primary'>Посты</button>
                        <button className='btn btn-primary'>Подписки</button>
                        <button className='btn btn-primary'>Подписчики</button>
                        <button className='btn btn-primary'>Комменты</button>
                        <button className='btn btn-primary'>Действия</button>
                        <button className='btn btn-primary'>Доставки</button>
                    </div>
                    <hr />
                    <div className='buttons-group justify-content-end'>
                        <button className='btn btn-outline-danger'>
                            Заблокировать
                        </button>
                        <button className='btn btn-secondary'>Отмена</button>
                        <button className='btn btn-success'>Сохранить</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
