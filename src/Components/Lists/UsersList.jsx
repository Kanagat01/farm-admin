import { useState } from "react";
import { NavLink, generatePath } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
import Icon from "@mdi/react";
import {
    mdiArrowRightThick,
    mdiFilter,
    mdiBlockHelper,
    mdiAccountPlus,
    mdiDownload,
    mdiSend,
} from "@mdi/js";

import Input from "../Layout/Input";
import DetailForm from "../Layout/DetailForm";
import { USER_ROUTE } from "../../utils/consts";
import { getUsers } from "../../utils/api_connection";
import { getUserDB } from "../../utils/models";

export default function UsersList() {
    const columns = ["ID", "Имя", "Никнейм", "Тип подписки", ""];
    const headers = [{ label: "ID", key: "id" }];
    let relInfo = getUserDB();
    Object.entries(relInfo).map(([key, value]) => {
        headers.push({ label: value.verbose_name, key: key });
        return 0;
    });

    const users = getUsers();
    const [showFilterModal, setShowFilterModal] = useState(false);
    const changeFilterModal = () => {
        setShowFilterModal(!showFilterModal);
    };
    const [showCreateUserModal, setShowCreateUserModal] = useState(false);
    const changeCreateUserModal = () => {
        setShowCreateUserModal(!showCreateUserModal);
    };
    const [showMailingModal, setShowMailingModal] = useState(false);
    const changeMailingModal = () => {
        setShowMailingModal(!showMailingModal);
    };

    const [showBlockModal, setshowBlockModal] = useState({});

    const handleCloseBlockModal = (userId) => {
        setshowBlockModal((prevState) => ({
            ...prevState,
            [userId]: false,
        }));
    };

    const handleShowBlockModal = (userId) => {
        setshowBlockModal((prevState) => ({
            ...prevState,
            [userId]: true,
        }));
    };
    const filter_inputs = [
        {
            label: "По типу подписки",
            type: "radio",
            name: "subscryption_type",
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
        },
    ];
    const mailing_inputs = [
        {
            label: "Категория пользователей",
            type: "radio",
            name: "users_category",
            radio_inputs: [
                { label: "Все", value: "all" },
                { label: "Категория 1", value: "category1" },
                { label: "Категория 2", value: "category2" },
            ],
        },
        {
            label: "Текст рассылки",
            type: "textarea",
            name: "mailing_text",
        },
    ];

    return (
        <div className='main'>
            <div className='table-title my-4'>
                Выберите пользователя для изменения
            </div>
            <div className='d-flex align-items-center'>
                <form action='#' className='search-box my-4'>
                    <div className='input-group'>
                        <input
                            type='text'
                            className='form-control'
                            id='inlineFormInputGroup'
                            placeholder='Искать по ID, Имя или Никнейм'
                            autoComplete='off'
                        />
                        <button
                            className='btn btn-primary rounded-btn d-inline-flex align-items-center justify-content-center'
                            type='submit'
                        >
                            <Icon path={mdiArrowRightThick} size={1} />
                        </button>
                    </div>
                </form>
                {/* Filter btn and modal */}
                <>
                    <button
                        className='btn btn-primary rounded-btn py-2 ms-5'
                        onClick={changeFilterModal}
                    >
                        <Icon
                            path={mdiFilter}
                            style={{ height: "1.5rem", width: "1.5rem" }}
                        />
                    </button>

                    <Modal show={showFilterModal} onHide={changeFilterModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Фильтр</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {filter_inputs.map((el) => (
                                <Input
                                    name={el.name}
                                    label={el.label}
                                    type={el.type}
                                    value={el.value}
                                    radio_inputs={el.radio_inputs}
                                    onChange={el.onChange}
                                />
                            ))}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant='secondary'
                                onClick={changeFilterModal}
                            >
                                Сбросить
                            </Button>
                            <Button
                                variant='primary'
                                onClick={changeFilterModal}
                            >
                                Применить
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                {/* CreateUser btn and modal */}
                <>
                    <button
                        className='btn btn-primary rounded-btn d-flex align-items-center py-2 ms-3'
                        onClick={changeCreateUserModal}
                    >
                        <span className='me-2'>Создать</span>
                        <Icon
                            path={mdiAccountPlus}
                            style={{ height: "1.5rem", width: "1.5rem" }}
                        />
                    </button>

                    <Modal
                        show={showCreateUserModal}
                        onHide={changeCreateUserModal}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Создать пользователя</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <DetailForm
                                isCreateMode={true}
                                relatedInfo={relInfo}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant='secondary'
                                onClick={changeCreateUserModal}
                            >
                                Отмена
                            </Button>
                            <Button
                                variant='primary'
                                onClick={changeCreateUserModal}
                            >
                                Создать
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                {/* Export users */}
                <CSVLink
                    data={users}
                    headers={headers}
                    className='btn btn-primary rounded-btn d-flex align-items-center py-2 ms-3'
                >
                    <span className='me-2'>Экспортировать</span>
                    <Icon
                        path={mdiDownload}
                        style={{ height: "1.5rem", width: "1.5rem" }}
                    />
                </CSVLink>
                {/* Mailing */}
                <>
                    <button
                        className='btn btn-primary rounded-btn d-flex align-items-center py-2 ms-3'
                        onClick={changeMailingModal}
                    >
                        <span className='me-2'>Рассылка</span>
                        <Icon
                            path={mdiSend}
                            style={{ height: "1.5rem", width: "1.5rem" }}
                        />
                    </button>
                    <Modal show={showMailingModal} onHide={changeMailingModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Сделать новую рассылку</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {mailing_inputs.map((el) => (
                                <Input
                                    name={el.name}
                                    label={el.label}
                                    type={el.type}
                                    value={el.value}
                                    radio_inputs={el.radio_inputs}
                                    onChange={el.onChange}
                                />
                            ))}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant='secondary'
                                onClick={changeMailingModal}
                            >
                                Отмена
                            </Button>
                            <Button
                                variant='primary'
                                onClick={changeMailingModal}
                            >
                                Отправить
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
            <table className='table table-stretched'>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                                <NavLink
                                    to={generatePath(USER_ROUTE, {
                                        user_id: user.id,
                                    })}
                                    className='table-link'
                                >
                                    {user.name}
                                </NavLink>
                            </td>
                            <td>{user.username}</td>
                            <td>
                                <div
                                    className={
                                        user.subscription_type === "premium"
                                            ? "badge badge-premium"
                                            : "badge badge-standart"
                                    }
                                >
                                    {user.subscription_type === "premium"
                                        ? "Премиум"
                                        : "Стандарт"}
                                </div>
                            </td>
                            <td>
                                <>
                                    <button
                                        className='btn-without-bg'
                                        onClick={() =>
                                            handleShowBlockModal(user.id)
                                        }
                                    >
                                        <Icon
                                            path={mdiBlockHelper}
                                            size={1.2}
                                            color={"var(--outline-danger)"}
                                        />
                                    </button>

                                    <Modal
                                        show={showBlockModal[user.id]}
                                        onHide={() =>
                                            handleCloseBlockModal(user.id)
                                        }
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                Заблокировать пользователя
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h2 className='title-md'>
                                                Вы уверены, что хотите
                                                заблокировать пользователя #
                                                {user.id} {user.name}?
                                            </h2>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button
                                                variant='secondary'
                                                onClick={() =>
                                                    handleCloseBlockModal(
                                                        user.id
                                                    )
                                                }
                                            >
                                                Отмена
                                            </Button>
                                            <Button
                                                variant='primary'
                                                onClick={() =>
                                                    handleCloseBlockModal(
                                                        user.id
                                                    )
                                                }
                                            >
                                                Заблокировать
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
