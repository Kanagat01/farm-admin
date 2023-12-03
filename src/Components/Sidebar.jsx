function Sidebar() {
    return (
    <div className='sidebar'>
        <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
            style={{ width: 280 }}
            >   
            <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
                <svg className="bi pe-none me-2" width={40} height={32}>
                <use xlinkHref="#bootstrap" />
                </svg>  
                <span className="fs-4">Allen Clerk</span>
            </a>
            <h6 className="mx-5 p-2">$3,400,00</h6>
            <span className="mx-5 fw-bolder">ADMIN</span>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                <a href="!#" className="nav-link active" aria-current="page">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#home" />
                    </svg>
                    Home
                </a>
                </li>
                <li>
                <a href="!#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#speedometer2" />
                    </svg>
                    Dashboard
                </a>
                </li>
                <li>
                <a href="!#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#speedometer2" />
                    </svg>
                    Sample Pages
                </a>
                </li>
                <li>
                <a href="!#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#speedometer2" />
                    </svg>
                    Something..
                </a>
                </li>
                <li>
                <a href="!#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#speedometer2" />
                    </svg>
                    Something..
                </a>
                </li>
                <li>
                <a href="!#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#speedometer2" />
                    </svg>
                    Something..
                </a>
                </li>
                <li>
                <a href="!#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#speedometer2" />
                    </svg>
                    Something..
                </a>
                </li>
                <li>
                <a href="!#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#speedometer2" />
                    </svg>
                    Something..
                </a>
                </li>
                <li>
                <a href="!#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#speedometer2" />
                    </svg>
                    Something..
                </a>
                </li>
                <li>
                <a href="!#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#table" />
                    </svg>
                    Something..
                </a>
                </li>
            </ul>
            <hr />
            <a href="!#" className="nav-link link-body-emphasis">
                    <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkHref="#table" />
                    </svg>
                    Documentation
            </a>
            {/* <div className="dropdown">
                <a
                href="!#"
                className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                <img
                    src="../assets/images/profileImage/admin.png"
                    alt="Admin Avatar"
                    width={32}
                    height={32}
                    className="rounded-circle me-2"
                />
                <strong>Allen Clerk</strong>
                </a>
                {/* <ul className="dropdown-menu text-small shadow">
                <li>
                    <a className="dropdown-item" href="!#">
                    Settings
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item" href="!#">
                    Sign out
                    </a>
                </li>
                </ul> */}
            {/* </div> */}
        </div>
    </div>
)}

export default Sidebar;
