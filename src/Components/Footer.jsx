function Footer() {
    return (
        <footer className='footer'>
            <div className='row'>
                <div className='col-sm-6 text-center text-sm-right order-sm-1'>
                    <ul className='text-gray'>
                        <li>
                            <a href='#'>Terms of use</a>
                        </li>
                        <li>
                            <a href='#'>Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className='col-sm-6 text-center text-sm-left mt-3 mt-sm-0'>
                    <small className='text-muted d-block'>
                        Copyright © 2019{" "}
                        <a
                            href='http://www.uxcandy.co'
                            target='_blank'
                            rel='noreferrer'
                        >
                            UXCANDY
                        </a>
                        . All rights reserved
                    </small>
                    <small className='text-gray mt-2'>
                        Handcrafted With{" "}
                        <i className='mdi mdi-heart text-danger'></i>
                    </small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
