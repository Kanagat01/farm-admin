import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import { LOGOUT_ROUTE } from "../utils/routes";

function Header() {
    let username = "Kana";
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const changeLogoutModal = () => {
        setShowLogoutModal(!showLogoutModal);
    };
    return (
        <div className='header p-4 d-flex justify-content-between align-items-center'>
            <button
                className='sidebar-toggler'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasExample'
                aria-controls='offcanvasExample'
            >
                <span className='toggler-icon'></span>
            </button>
            <div className='header-title'>Администрация фермы</div>
            <div className='d-flex align-items-center'>
                <span className='greeting'>Здраствуйте, {username} /</span>
                <button className='ms-2 logout-btn' onClick={changeLogoutModal}>
                    Выйти
                </button>
                <Modal show={showLogoutModal} onHide={changeLogoutModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Выйти</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2 className='title-md'>
                            Вы уверены, что хотите выйти со своего аккаунта?
                        </h2>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={changeLogoutModal}>
                            Отмена
                        </Button>
                        <NavLink
                            to={LOGOUT_ROUTE}
                            className='btn btn-primary'
                            onClick={changeLogoutModal}
                        >
                            Выйти
                        </NavLink>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default Header;
