import mdi_styles from "../assets/vendors/iconfonts/mdi/css/materialdesignicons.css";
import style from "../assets/css/demo_1/style.css";
import logo from "../assets/images/logo.svg";
import logo_mini from "../assets/images/logo_mini.svg";

function Header() {
    return (
        <nav className='t-header'>
            <div className='t-header-brand-wrapper'>
                <a href='#'>
                    <img className='logo' src={logo} alt='logo' />
                    <img
                        className='logo-mini'
                        src={logo_mini}
                        alt='logo-mini'
                    />
                </a>
            </div>
            <div className='t-header-content-wrapper'>
                <div className='t-header-content'>
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
                </div>
            </div>
        </nav>
    );
}

export default Header;
