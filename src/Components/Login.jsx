import "../styles/Login.css";

export default function Login() {
    return (
        <div
            className='d-flex flex-column align-items-center'
            style={{ height: "100vh" }}
        >
            <h1 className='title my-5'>Администрация фермы</h1>
            <div className='row login-form-container'>
                <div className='col-lg-5 col-md-7 col-sm-9 col-11 mx-auto'>
                    <form action='#' className='login-form'>
                        <div class='form-group input-rounded'>
                            <input
                                type='text'
                                class='form-control'
                                placeholder='Имя пользователя'
                            />
                        </div>
                        <div class='form-group input-rounded'>
                            <input
                                type='password'
                                class='form-control'
                                placeholder='Пароль'
                            />
                        </div>
                        <div class='form-inline'>
                            <div class='checkbox'>
                                <label>
                                    <input
                                        type='checkbox'
                                        class='form-check-input me-2'
                                    />
                                    Запомнить меня <i class='input-frame'></i>
                                </label>
                            </div>
                        </div>
                        <button type='submit' class='btn btn-primary btn-block'>
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
