import React from "react"
import { Button, Container} from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { BAN_ROUTE, EDIT_ROUTE, CREATE_ROUTE } from "../../utils/consts";

const BanUser = () => {
    return (
        <Container >
        <div className="banUser">
            <form className="row g-3 needs-validation p-3" >
                <h3>Управление пользователями</h3>
                <div className="d-flex">
                <NavLink to={CREATE_ROUTE} className="btn btn-outline-success m-1" activeClassName="active">
                    Создать
                </NavLink>
                <NavLink to={BAN_ROUTE} className="btn btn-outline-danger m-1"  activeClassName="active">
                    Забанить
                </NavLink>
                <NavLink to={EDIT_ROUTE} className="btn btn-outline-secondary m-1"  activeClassName="active">
                    Редактировать
                </NavLink>
                </div>
                <form className="d-flex" role="search">
                    <div >
                        <small>Искать пользователя по нику...</small>
                    </div>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="@someone..."
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Искать
                    </button>
                </form>
                <hr/>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">
                    Имя
                    </label>
                    <input
                    type="text"
                    className="form-control border"
                    id="validationCustom01"
                    // defaultValue="Иван"
                    required=""
                    />
                    <div className="valid-feedback">Все хорошо!</div>
                </div>
                <hr />
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">
                    Фамилия
                    </label>
                    <input
                    type="text"
                    className="form-control border"
                    id="validationCustom02"
                    // defaultValue="Петров"
                    required=""
                    />
                    <div className="valid-feedback">Все хорошо!</div>
                </div>
                <hr />
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">
                    Имя пользователя
                    </label>
                    <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">
                        @
                    </span>
                    <input
                        type="text"
                        className="form-control border"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        required=""
                    />
                    <div className="invalid-feedback">
                        Пожалуйста, выберите имя пользователя.
                    </div>
                    </div>
                </div>
                <hr />
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">
                    Индекс
                    </label>
                    <input
                    type="text"
                    className="form-control border"
                    id="validationCustom05"
                    required=""
                    />
                    <div className="invalid-feedback">
                    Пожалуйста, предоставьте действующий почтовый индекс.
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="invalidCheck"
                        required=""
                    />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Вы уверены?
                    </label>
                    <div className="invalid-feedback">Вы должны принять перед отправкой.</div>
                    </div>
                </div>
                <div className="col-12">
                    <Button variant="outline-danger">
                    Забанить
                    </Button>
                </div>
            </form>
        </div>
        </Container>
)}

export default BanUser
