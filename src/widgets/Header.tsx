import { useState, useContext, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { AuthContext } from "~/app/providers";
import { apiInstance } from "~/shared/api";
import { permissions } from "~/shared/router";

export function Header() {
  const { isAuthenticated, setAuth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
        apiInstance.get("/api_admin/get_admin/").then((response) => {
          const responseData = response.data.message;
          Object.values(permissions).map((access) => {
            localStorage.setItem(access, responseData[access]);
          });
          setUsername(responseData.user.username);
        });
      }
    };
    fetchData();
  }, []);

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const closeModal = () => {
    setShowLogoutModal(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setAuth(false);
    setShowLogoutModal(false);
  };
  return (
    <div className="header p-4 d-flex justify-content-between align-items-center">
      <button
        className="sidebar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <span className="toggler-icon"></span>
      </button>
      <div className="header-title">Администрация фермы</div>
      <div className="d-flex align-items-center">
        {isAuthenticated ? (
          <>
            <span className="greeting">
              {username ? `Добро пожаловать, ${username} /` : ""}
            </span>
            <button
              className="ms-2 logout-btn"
              onClick={() => {
                setShowLogoutModal(!showLogoutModal);
              }}
            >
              Выйти
            </button>
          </>
        ) : (
          ""
        )}
        <Modal show={showLogoutModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Выйти</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2 className="title-md">
              Вы уверены, что хотите выйти со своего аккаунта?
            </h2>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Отмена
            </Button>
            <Button variant="primary" onClick={handleLogout}>
              Выйти
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
