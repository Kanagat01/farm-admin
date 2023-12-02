import "../assets/vendors/iconfonts/mdi/css/materialdesignicons.css";
import logo from "../assets/images/logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <nav className='t-header'>
            <div className='t-header-brand-wrapper'>
                <a href='!#'>
                    <img
                        className='logo'
                        src={logo}
                        alt='logo'
                    />
                    <img
                        className='logo-mini'
                        src={logo}
                        alt='logo-mini'
                    />
                </a>
            </div>
            <div className='t-header-content-wrapper'>
                <div className='t-header-content d-flex justify-content-between'>
                    <button className='t-header-toggler t-header-mobile-toggler d-block d-lg-none'>
                        <i className='mdi mdi-menu'></i>
                    </button>
                    <form action='#' className='t-header-search-box'>
                        <div className='input-group'>
                            <input
                                type='text'
                                className='form-control'
                                id='inlineFormInputGroup'
                                placeholder='Search'
                                autocomplete='off'
                            />
                            <button className='btn btn-primary' type='submit'>
                                <i className='mdi mdi-arrow-right-thick'></i>
                            </button>
                        </div>
                    </form>
                    <div className="auth">
                        <button class="btn btn-outline-success" type="submit">Авторизация</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
