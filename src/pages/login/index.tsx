import { AxiosError } from "axios";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";

import { AuthContext } from "~/app/providers";
import { API_URL } from "~/shared/config";
import { apiInstance } from "~/shared/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    apiInstance
      .post(`${API_URL}/api_admin/token/`, {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        setAuth(true);
        setIsLoading(false);
        navigate(from);
      })
      .catch((error: unknown) => {
        const axiosError = error as AxiosError;
        if (axiosError?.response) {
          if (axiosError.response?.status === 401) {
            let usernameInput = document.querySelector(
              "input[name='username']"
            );
            let pswdInput = document.querySelector("input[name='password']");
            usernameInput?.classList.add("is-invalid");
            pswdInput?.classList.add("is-invalid");
          }
          console.log(axiosError?.response);
        } else {
          console.log("Error", axiosError?.message);
        }
        setIsLoading(false);
      });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-align-center my-5">Администрация фермы</h1>
      <div className="row login-form-container">
        <div className="col-xl-6 col-lg-8 col-sm-10 col-12 mx-auto">
          <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Group className="input-rounded mb-4">
              <Form.Label style={{ marginBottom: "1rem", fontSize: "1.6rem" }}>
                Логин
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Введите имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="input-rounded mb-4">
              <Form.Label style={{ marginBottom: "1rem", fontSize: "1.6rem" }}>
                Пароль
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ fontSize: "1.4rem" }}
              >
                Неправильный логин или пароль
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant="primary"
              className="btn-block"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Spinner animation="border" /> : "Войти"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
