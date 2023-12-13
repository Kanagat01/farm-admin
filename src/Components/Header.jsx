function Header() {
    let username = "Kana";
    return (
        <div className='header p-4 d-flex justify-content-between align-items-center'>
            <div className='header-title'>Администрация фермы</div>
            <div className='d-flex align-items-center'>
                <span className='greeting'>Здраствуйте, {username} /</span>
                <a href='!#' className='btn logout-btn'>
                    Выйти
                </a>
            </div>
        </div>
    );
}

export default Header;
