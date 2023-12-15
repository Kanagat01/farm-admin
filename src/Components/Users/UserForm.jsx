import { useState } from "react";
import { NavLink } from "react-router-dom";
import { USER_ACTIONS } from "../../utils/consts";
import Input from "../Input";

export default function UserForm(props) {
    const isCreateMode = Object.keys(props).length === 0;
    const { userObj } = props;
    const [user, setUser] = useState({
        ...userObj,
    });

    const updateObjectField = (fieldName, value) => {
        setUser((prevUser) => ({
            ...prevUser,
            [fieldName]: value,
        }));
    };
    const inputs_list = [
        {
            label: "Имя",
            name: "full_name",
            type: "text",
            value: user.name,
            onChange: (e) => updateObjectField("name", e.target.value),
        },
        {
            label: "Фото",
            name: "photo",
            type: "image",
            value: user.photo,
            onChange: updateObjectField,
        },
        {
            label: "Электронная почта",
            name: "email",
            type: "email",
            value: user.email,
            onChange: (e) => updateObjectField("email", e.target.value),
        },
        {
            label: "О себе",
            name: "description",
            type: "textarea",
            value: user.description,
            onChange: (e) => updateObjectField("description", e.target.value),
        },
        {
            label: "Имя пользователя",
            name: "username",
            type: "text",
            value: user.username,
            onChange: (e) => updateObjectField("username", e.target.value),
        },
        {
            label: "Статус подписки",
            name: "subscription_type",
            type: "radio",
            value: user.subscription_type,
            radio_inputs: [
                {
                    label: "Стандарт",
                    value: "standart",
                },
                {
                    label: "Премиум",
                    value: "premium",
                },
            ],
            onChange: (e) =>
                updateObjectField("subscription_type", e.target.value),
        },
        {
            label: "Номер телефона",
            name: "phone",
            type: "phone",
            value: user.phone,
            onChange: (e) => updateObjectField("phone", e.target.value),
        },
        {
            label: "Дата рождения",
            name: "birthday",
            type: "date",
            value: user.birthday,
            onChange: (e) => updateObjectField("birthday", e.target.value),
        },
        {
            label: "Пол",
            name: "gender",
            type: "radio",
            value: user.gender,
            radio_inputs: [
                {
                    label: "М",
                    value: "male",
                },
                {
                    label: "Ж",
                    value: "female",
                },
            ],
            onChange: (e) => updateObjectField("gender", e.target.value),
        },
        {
            label: "Другие аккаунты",
            name: "other_accounts",
            type: "text",
            value: user.other_accounts ? user.other_accounts.join(", ") : "",
            onChange: (e) =>
                updateObjectField("other_accounts", e.target.value.split(", ")),
        },
    ];
    return (
        <form className='row' encType='multipart/form-data'>
            {!isCreateMode ? (
                <div className='table-title my-4'>
                    Информация о пользователе #{user.id} {user.name}
                </div>
            ) : (
                ""
            )}
            <div className='info-block'>
                {inputs_list.map((el) => (
                    <Input
                        label={el.label}
                        name={el.name}
                        type={el.type}
                        value={el.value}
                        onChange={el.onChange}
                        radio_inputs={el.radio_inputs}
                    />
                ))}
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
