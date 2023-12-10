import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BAN_ROUTE, EDIT_ROUTE } from "../../utils/consts";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Icon from '@mdi/react';
import { mdiLeadPencil } from '@mdi/js';

export default function UserInfo() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Container>
            <div className='addUser'>
                <form className='row g-3 needs-validation p-3' noValidate=''>
                    <h3>Управление пользователями</h3>
                    <div className='d-flex'>
                        <NavLink
                            to={EDIT_ROUTE}
                            className='m-1'
                            activeClassName='active'
                        >
                        <Icon path={mdiLeadPencil} size={1} className="text-secondary" /> 
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
                            placeholder="Введите ваше имя"
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
                            placeholder="Введите вашу фамилию"
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
                            placeholder="Введите имя пользователя"
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
                            placeholder="Введите название вашего города"
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
                            placeholder="Введите уникальный индекс"
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
                        <Button className="btn btn-primary m-1">Создать</Button>
                        <Button className="btn btn-primary m-1" onClick={handleShow}>Забанить</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton />
                            <Modal.Body>Вы уверены что хотите забанить данного пользователя?</Modal.Body>
                            <Modal.Footer>
                            <Button className="btn btn-primary" onClick={handleClose}>
                                Забанить
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </form>
            </div>
        </Container>
    );
}
