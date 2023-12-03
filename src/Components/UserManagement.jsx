export default function UserManagment(props) 
{
    return (
    <div className="addUser">
        <form className="row g-3 needs-validation p-3" noValidate="">
            <div className="col-md-4 p-3">
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
            <div className="col-md-4 p-3">
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
            <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                Город
                </label>
                <input
                type="text"
                className="form-control border"
                id="validationCustom03"
                required=""
                />
                <div className="invalid-feedback">Укажите действующий город.</div>
            </div>
            <hr />
            <div className="col-md-3">
                <label htmlFor="validationCustom04" className="form-label">
                Область
                </label>
                <select className="form-select" id="validationCustom04" required="">
                <option selected="" disabled="" value="">
                    Выберите...
                </option>
                <option>...</option>
                </select>
                <div className="invalid-feedback">
                Пожалуйста, выберите корректный город.
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
                    Примите условия и соглашения
                </label>
                <div className="invalid-feedback">Вы должны принять перед отправкой.</div>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">
                Создать
                </button>
            </div>
        </form>
    </div>
)}
