import { useState } from "react";
import { NavLink, generatePath } from "react-router-dom";

import Input from "../Layout/Input";
import {
    CHATS_ROUTE,
    MODELS_ROUTE,
    POSTS_ROUTE,
    USERS_ROUTE,
    SEEDS_ROUTE,
    FARMS_ROUTE,
    GIFTS_3D_ROUTE,
    FARM_GIFTS_ROUTE,
    REVIEWS_ROUTE,
} from "../../utils/consts";

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
            label: "Электронная почта",
            name: "email",
            type: "email",
            value: user.email,
            onChange: (e) => updateObjectField("email", e.target.value),
        },
        {
            label: "Номер телефона",
            name: "phone",
            type: "phone",
            value: user.phone,
            onChange: (e) => updateObjectField("phone", e.target.value),
        },
        {
            label: "Айкоины",
            name: "icoins",
            type: "number",
            value: user.icoins,
            onChange: (e) => updateObjectField("icoins", e.target.value),
        },
        {
            label: "Пластиковые бутылки",
            name: "plastic_bottels",
            type: "number",
            value: user.plastic_bottels,
            onChange: (e) =>
                updateObjectField("plastic_bottels", e.target.value),
        },
        {
            label: "Алюминиевые бутылки",
            name: "alum_bottels",
            type: "number",
            value: user.alum_bottels,
            onChange: (e) => updateObjectField("alum_bottels", e.target.value),
        },
        {
            label: "Имя",
            name: "name",
            type: "text",
            value: user.name,
            onChange: (e) => updateObjectField("name", e.target.value),
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
        // {
        //     label: "Статус подписки",
        //     name: "subscription_type",
        //     type: "radio",
        //     value: user.subscription_type,
        //     radio_inputs: [
        //         {
        //             label: "Стандарт",
        //             value: "standart",
        //         },
        //         {
        //             label: "Премиум",
        //             value: "premium",
        //         },
        //     ],
        //     onChange: (e) =>
        //         updateObjectField("subscription_type", e.target.value),
        // },
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
            label: "Дата рождения",
            name: "bday",
            type: "date",
            value: user.bday,
            onChange: (e) => updateObjectField("bday", e.target.value),
        },
        {
            label: "Достижения",
            name: "achievments",
            type: "textarea",
            value: user.achievments ? user.achievments.join(", ") : "",
            onChange: (e) =>
                updateObjectField(
                    "achievments",
                    e.target.value.replace(" ", "").split(",")
                ),
        },
    ];
    const generateURL = (route) => generatePath(route, { user_id: user.id });
    const related_links = [
        { route: `${USERS_ROUTE}?user_friends=${user.id}`, name: "Друзья" },
        {
            route: `${USERS_ROUTE}?user_followers=${user.id}`,
            name: "Подписчики",
        },
        {
            route: `${USERS_ROUTE}?user_followings=${user.id}`,
            name: "Подписки",
        },
        { route: `${POSTS_ROUTE}?user_posts=${user.id}`, name: "Посты" },
        { route: generateURL(CHATS_ROUTE, { user_id: user.id }), name: "Чаты" },
        { route: `${FARMS_ROUTE}?user_farms=${user.id}`, name: "Фермы" },
        { route: `${MODELS_ROUTE}?user_models=${user.id}`, name: "3D модели" },
        {
            route: generateURL(GIFTS_3D_ROUTE, { user_id: user.id }),
            name: "Подарки 3D",
        },
        { route: SEEDS_ROUTE, name: "Семена" },
        {
            route: generateURL(FARM_GIFTS_ROUTE, { user_id: user.id }),
            name: "Подарки Ферма",
        },
        { route: `${REVIEWS_ROUTE}?user_reviews=${user.id}`, name: "Отзывы" },
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
                            {related_links.map((el) => (
                                <NavLink
                                    to={el.route}
                                    className='btn btn-primary'
                                >
                                    {el.name}
                                </NavLink>
                            ))}
                        </div>
                        <hr />
                        <div className='buttons-group justify-content-end'>
                            <button className='btn btn-outline-danger'>
                                {user.is_banned
                                    ? "Разблокировать"
                                    : "Заблокировать"}
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
