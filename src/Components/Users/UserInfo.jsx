import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BAN_ROUTE, EDIT_ROUTE } from "../../utils/consts";

export default function UserInfo() {
    return (
        <Container>
            <div className='addUser'>
                <form className='row g-3 needs-validation p-3' noValidate=''>
                    <h3>Управление пользователями</h3>
                    <div className='d-flex'>
                        <NavLink
                            to={BAN_ROUTE}
                            className='btn btn-outline-danger m-1'
                            activeClassName='active'
                        >
                            Забанить
                        </NavLink>
                        <NavLink
                            to={EDIT_ROUTE}
                            className='btn btn-outline-secondary m-1'
                            activeClassName='active'
                        >
                            Редактировать
                        </NavLink>
                    </div>
                    <div className='col-md-4'>
                        <label
                            htmlFor='validationCustom01'
                            className='form-label'
                        >
                            Имя
                        </label>
                        <input
                            type='text'
                            className='form-control border'
                            id='validationCustom01'
                            required=''
                        />
                        <div className='valid-feedback'>Все хорошо!</div>
                    </div>
                    <hr />
                    <div className='col-md-4'>
                        <label
                            htmlFor='validationCustom02'
                            className='form-label'
                        >
                            Фамилия
                        </label>
                        <input
                            type='text'
                            className='form-control border'
                            id='validationCustom02'
                            required=''
                        />
                        <div className='valid-feedback'>Все хорошо!</div>
                    </div>
                    <hr />
                    <div className='col-md-4'>
                        <label
                            htmlFor='validationCustomUsername'
                            className='form-label'
                        >
                            Имя пользователя
                        </label>
                        <div className='input-group has-validation'>
                            <span
                                className='input-group-text'
                                id='inputGroupPrepend'
                            >
                                @
                            </span>
                            <input
                                type='text'
                                className='form-control border'
                                id='validationCustomUsername'
                                aria-describedby='inputGroupPrepend'
                                required=''
                            />
                            <div className='invalid-feedback'>
                                Пожалуйста, выберите имя пользователя.
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='col-md-6'>
                        <label
                            htmlFor='validationCustom03'
                            className='form-label'
                        >
                            Город
                        </label>
                        <input
                            type='text'
                            className='form-control border'
                            id='validationCustom03'
                            required=''
                        />
                        <div className='invalid-feedback'>
                            Укажите действующий город.
                        </div>
                    </div>
                    <hr />
                    <div className='col-md-3'>
                        <label
                            htmlFor='validationCustom04'
                            className='form-label'
                        >
                            Область
                        </label>
                        <select
                            className='form-select'
                            id='validationCustom04'
                            required=''
                        >
                            <option selected='' disabled='' value=''>
                                Выберите...
                            </option>
                            <option>...</option>
                        </select>
                        <div className='invalid-feedback'>
                            Пожалуйста, выберите корректный город.
                        </div>
                    </div>
                    <hr />
                    <div className='col-md-3'>
                        <label
                            htmlFor='validationCustom05'
                            className='form-label'
                        >
                            Индекс
                        </label>
                        <input
                            type='text'
                            className='form-control border'
                            id='validationCustom05'
                            required=''
                        />
                        <div className='invalid-feedback'>
                            Пожалуйста, предоставьте действующий почтовый
                            индекс.
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-check'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                defaultValue=''
                                id='invalidCheck'
                                required=''
                            />
                            <label
                                className='form-check-label'
                                htmlFor='invalidCheck'
                            >
                                Примите условия и соглашения
                            </label>
                            <div className='invalid-feedback'>
                                Вы должны принять перед отправкой.
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <Button variant='outline-success'>Создать</Button>
                    </div>
                </form>
            </div>
        </Container>
    );
}
