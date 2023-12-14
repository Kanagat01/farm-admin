import { useState } from "react";
import { USER_ACTIONS } from "../../utils/consts";
import { NavLink } from "react-router-dom";


export default function UserForm(userObj) {
    const isCreateMode = Object.keys(userObj).length === 0;
    const [user, setUser] = useState({
        ...userObj.userObj,
    });

    const updateObjectField = (fieldName, value) => {
        setUser((prevUser) => ({
            ...prevUser,
            [fieldName]: value,
        }));
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUser({
                ...user,
                photo: URL.createObjectURL(file),
            });
        }
    };
    return (
        <form className='row' encType='multipart/form-data'>
            {!isCreateMode ? (
                <div class='table-title my-4'>
                    Информация о пользователе #{user.id} {user.name}
                </div>
            ) : (
                ""
            )}
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
                            onChange={(e) =>
                                updateObjectField("name", e.target.value)
                            }
                        />
                    </div>
                </div>
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label htmlFor='photo'>Фото</label>
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            {user.photo ? (
                                <div className='col-3 d-flex align-items-center justify-content-center'>
                                    <a href={user.photo} className='photo-link'>
                                        Посмотреть фото
                                    </a>
                                </div>
                            ) : (
                                ""
                            )}
                            <div className='col-9 d-flex align-items-center'>
                                <input
                                    type='file'
                                    name='photo'
                                    className='form-control'
                                    onChange={handleFileChange}
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
                            onChange={(e) =>
                                updateObjectField("email", e.target.value)
                            }
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
                            onChange={(e) =>
                                updateObjectField("description", e.target.value)
                            }
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
                            onChange={(e) =>
                                updateObjectField("username", e.target.value)
                            }
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
                                        user.subscription_type === "standart"
                                    }
                                    onChange={(e) =>
                                        updateObjectField(
                                            "subscription_type",
                                            e.target.value
                                        )
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
                                    onChange={(e) =>
                                        updateObjectField(
                                            "subscription_type",
                                            e.target.value
                                        )
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
                            onChange={(e) =>
                                updateObjectField("phone", e.target.value)
                            }
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
                            onChange={(e) =>
                                updateObjectField("birthday", e.target.value)
                            }
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
                                    onChange={(e) =>
                                        updateObjectField(
                                            "gender",
                                            e.target.value
                                        )
                                    }
                                />
                                <span>М</span>
                            </label>
                            <label>
                                <input
                                    type='radio'
                                    name='gender'
                                    value='female'
                                    checked={user.gender === "female"}
                                    onChange={(e) =>
                                        updateObjectField(
                                            "gender",
                                            e.target.value
                                        )
                                    }
                                />
                                <span>Ж</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class='form-group input-rounded row d-flex align-items-center'>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <label htmlFor='other_accounts'>Другие аккаунты</label>
                    </div>
                    <div className='col-md-9'>
                        <input
                            type='text'
                            name='other_accounts'
                            class='form-control'
                            value={
                                user.other_accounts
                                    ? user.other_accounts.join(", ")
                                    : ""
                            }
                            onChange={(e) =>
                                updateObjectField(
                                    "other_accounts",
                                    e.target.value.split(", ")
                                )
                            }
                        />
                    </div>
                </div>
                {!isCreateMode ? (
                    <>
                        <hr />
                        <div className='buttons-group justify-content-end'>
                            <button className='btn btn-primary'>Посты</button>
                            <button className='btn btn-primary'>
                                Подписки
                            </button>
                            <button className='btn btn-primary'>
                                Подписчики
                            </button>
                            <button className='btn btn-primary'>
                                Комменты
                            </button>
                            <NavLink to={USER_ACTIONS}>
                            <button className='btn btn-primary'>
                                Действия
                            </button>
                            </NavLink>
                            <button className='btn btn-primary'>
                                Доставки
                            </button>
                        </div>
                        <hr />
                        <div className='buttons-group justify-content-end'>
                            <button className='btn btn-outline-danger'>
                                Заблокировать
                            </button>
                            <button className='btn btn-secondary'>
                                Отмена
                            </button>
                            <button className='btn btn-success'>
                                Сохранить
                            </button>
                        </div>
                    </>
                ) : (
                    ""
                )}
            </div>
        </form>
    );
}
