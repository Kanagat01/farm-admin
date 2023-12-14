import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        localStorage.setItem("token", "authorized");
        window.location.href = "/";
    };

    return (
        <div className='main d-flex flex-column align-items-center'>
            <h1 className='text-align-center my-5'>Администрация фермы</h1>
            <div className='row login-form-container'>
                <div className='col-xl-6 col-lg-8 col-sm-10 col-12 mx-auto'>
                    <form className='login-form' onSubmit={handleLogin}>
                        <div class='form-group input-rounded'>
                            <label
                                htmlFor='email'
                                style={{
                                    marginBottom: "1rem",
                                    fontSize: "1.6rem",
                                }}
                            >
                                Логин
                            </label>
                            <input
                                type='text'
                                name='username'
                                class='form-control'
                                placeholder='Введите имя пользователя'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div class='form-group input-rounded'>
                            <label
                                htmlFor='email'
                                style={{
                                    marginBottom: "1rem",
                                    fontSize: "1.6rem",
                                }}
                            >
                                Пароль
                            </label>
                            <input
                                type='password'
                                class='form-control'
                                placeholder='Введите пароль'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
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
