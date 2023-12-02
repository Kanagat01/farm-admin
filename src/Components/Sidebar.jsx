import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import maleAvatar from "../assets/images/profile/male/image_2.png"

function Sidebar() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
      };
      
    const closeModal = () => {
        setShowModal(false);
      };

    const handleModalClick = (e) => {
        if (e.target.className === 'modal') {
            setShowModal(false);
        }
    };


    return (
        <div className='sidebar'>
            <div className='user-profile'>
                <div className='display-avatar animated-avatar'>
                    <img
                        className='profile-img img-lg rounded-circle'
                        src={maleAvatar}
                        alt='profile img'
                    />
                </div>
                <div className='info-wrapper'>
                    <p className='user-name'>Allen Clerk</p>
                    <p className="admin-access" style={{fontWeight: 700}}>ADMIN</p>
                    <h6 className='display-income'>$3,400,00</h6>
                </div>
            </div>
            <ul className='navigation-menu'>
                <li className='nav-category-divider'>MAIN</li>
                <li>
                    <a href='index.html'>
                        <span className='link-title'>Dashboard</span>
                        <i className='mdi mdi-gauge link-icon'></i>
                    </a>
                </li>
                <li onClick={openModal}>
                    <a href='index.html'>
                        <span className='link-title'>Users</span>
                        <i className='mdi mdi-account link-icon'></i>
                    </a>
                </li>
                {showModal && (
                <div className="modal" onClick={handleModalClick}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <p>Содержимое модального окна здесь...</p>
                    </div>
                </div>
                )}
                <li>
                    <a
                        href='#sample-pages'
                        data-toggle='collapse'
                        aria-expanded='false'
                    >
                        <span className='link-title'>Sample Pages</span>
                        <i className='mdi mdi-flask link-icon'></i>
                    </a>
                    <ul
                        className='collapse navigation-submenu'
                        id='sample-pages'
                    >
                        <li>
                            <a
                                href='pages/sample-pages/login_1.html'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Login
                            </a>
                        </li>
                        <li>
                            <a
                                href='pages/sample-pages/error_2.html'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Error
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a
                        href='#ui-elements'
                        data-toggle='collapse'
                        aria-expanded='false'
                    >
                        <span className='link-title'>UI Elements</span>
                        <i className='mdi mdi-bullseye link-icon'></i>
                    </a>
                    <ul
                        className='collapse navigation-submenu'
                        id='ui-elements'
                    >
                        <li>
                            <a href='pages/ui-components/buttons.html'>
                                Buttons
                            </a>
                        </li>
                        <li>
                            <a href='pages/ui-components/tables.html'>Tables</a>
                        </li>
                        <li>
                            <a href='pages/ui-components/typography.html'>
                                Typography
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href='pages/forms/form-elements.html'>
                        <span className='link-title'>Forms</span>
                        <i className='mdi mdi-clipboard-outline link-icon'></i>
                    </a>
                </li>
                <li>
                    <a href='pages/charts/chartjs.html'>
                        <span className='link-title'>Charts</span>
                        <i className='mdi mdi-chart-donut link-icon'></i>
                    </a>
                </li>
                <li>
                    <a href='pages/icons/material-icons.html'>
                        <span className='link-title'>Icons</span>
                        <i className='mdi mdi-flower-tulip-outline link-icon'></i>
                    </a>
                </li>
                <li className='nav-category-divider'>DOCS</li>
                <li>
                    <a href='../docs/docs.html'>
                        <span className='link-title'>Documentation</span>
                        <i className='mdi mdi-asterisk link-icon'></i>
                    </a>
                </li>
            </ul>
            <div className='sidebar-upgrade-banner'>
                <p className='text-gray'>
                    Upgrade to <b className='text-primary'>PRO</b> for more
                    exciting features
                </p>
                <a
                    className='btn upgrade-btn'
                    target='_blank'
                    rel='noreferrer'
                    href='http://www.uxcandy.co/product/label-pro-admin-template/'
                >
                    Upgrade to PRO
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
