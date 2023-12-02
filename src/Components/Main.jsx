import logo from "../assets/images/logo.svg";

function Main() {
    return (
        <div className='page-content-wrapper'>
            <div className='page-content-wrapper-inner'>
                <div className='content-viewport'>
                    <div className='row'>
                        <div className='col-12 py-5'>
                            <h4>Dashboard</h4>
                            <p className='text-gray'>
                                Welcome aboard, Allen Clerk
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 col-sm-6 col-6 equel-grid'>
                            <div className='grid'>
                                <div className='grid-body text-gray'>
                                    <div className='d-flex justify-content-between'>
                                        <p>30%</p>
                                        <p>+06.2%</p>
                                    </div>
                                    <p className='text-black'>Traffic</p>
                                    <div className='wrapper w-50 mt-4'>
                                        <canvas
                                            height='45'
                                            id='stat-line_1'
                                        ></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-6 equel-grid'>
                            <div className='grid'>
                                <div className='grid-body text-gray'>
                                    <div className='d-flex justify-content-between'>
                                        <p>43%</p>
                                        <p>+15.7%</p>
                                    </div>
                                    <p className='text-black'>Conversion</p>
                                    <div className='wrapper w-50 mt-4'>
                                        <canvas
                                            height='45'
                                            id='stat-line_2'
                                        ></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-6 equel-grid'>
                            <div className='grid'>
                                <div className='grid-body text-gray'>
                                    <div className='d-flex justify-content-between'>
                                        <p>23%</p>
                                        <p>+02.7%</p>
                                    </div>
                                    <p className='text-black'>Bounce Rate</p>
                                    <div className='wrapper w-50 mt-4'>
                                        <canvas
                                            height='45'
                                            id='stat-line_3'
                                        ></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-6 equel-grid'>
                            <div className='grid'>
                                <div className='grid-body text-gray'>
                                    <div className='d-flex justify-content-between'>
                                        <p>75%</p>
                                        <p>- 53.34%</p>
                                    </div>
                                    <p className='text-black'>Marketing</p>
                                    <div className='wrapper w-50 mt-4'>
                                        <canvas
                                            height='45'
                                            id='stat-line_4'
                                        ></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 equel-grid'>
                            <div className='grid'>
                                <div className='grid-body d-flex flex-column h-100'>
                                    <div className='wrapper'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='split-header'>
                                                <img
                                                    className='img-ss mt-1 mb-1 mr-2'
                                                    src={
                                                        logo
                                                    }
                                                    alt='instagram'
                                                />
                                                <p className='card-title'>
                                                    Followers Growth
                                                </p>
                                            </div>
                                            <div className='wrapper'>
                                                <button
                                                    className='btn action-btn btn-xs component-flat pr-0'
                                                    type='button'
                                                >
                                                    <i className='mdi mdi-access-point text-muted mdi-2x'></i>
                                                </button>
                                                <button
                                                    className='btn action-btn btn-xs component-flat pr-0'
                                                    type='button'
                                                >
                                                    <i className='mdi mdi-cloud-download-outline text-muted mdi-2x'></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-end pt-2 mb-4'>
                                            <h4>16.2K</h4>
                                            <p className='ml-2 text-muted'>
                                                New Followers
                                            </p>
                                        </div>
                                    </div>
                                    <div className='mt-auto'>
                                        <canvas
                                            className='curved-mode'
                                            id='followers-bar-chart'
                                            height='220'
                                        ></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 equel-grid'>
                            <div className='grid'>
                                <div className='grid-body'>
                                    <p className='card-title'>Campaign</p>
                                    <div id='radial-chart'></div>
                                    <h4 className='text-center'>$23,350.00</h4>
                                    <p className='text-center text-muted'>
                                        Used balance this billing cycle
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 equel-grid'>
                            <div className='grid table-responsive'>
                                <table className='table table-stretched'>
                                    <thead>
                                        <tr>
                                            <th>Symbol</th>
                                            <th>Price</th>
                                            <th>Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p className='mb-n1 font-weight-medium'>
                                                    AAPL
                                                </p>
                                                <small className='text-gray'>
                                                    Apple Inc.
                                                </small>
                                            </td>
                                            <td className='font-weight-medium'>
                                                198.18
                                            </td>
                                            <td className='text-danger font-weight-medium'>
                                                <div className='badge badge-success'>
                                                    -1.39%
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='mb-n1 font-weight-medium'>
                                                    NKE
                                                </p>
                                                <small className='text-gray'>
                                                    Nike,Inc.
                                                </small>
                                            </td>
                                            <td className='font-weight-medium'>
                                                03.95
                                            </td>
                                            <td className='text-danger font-weight-medium'>
                                                <div className='badge badge-danger'>
                                                    -1.17%
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='mb-n1 font-weight-medium'>
                                                    NSEI
                                                </p>
                                                <small className='text-gray'>
                                                    Nifty 50
                                                </small>
                                            </td>
                                            <td className='font-weight-medium'>
                                                11,278
                                            </td>
                                            <td className='text-danger font-weight-medium'>
                                                <div className='badge badge-success'>
                                                    -0.24%
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='mb-n1 font-weight-medium'>
                                                    BA
                                                </p>
                                                <small className='text-gray'>
                                                    The Boeing Company
                                                </small>
                                            </td>
                                            <td className='font-weight-medium'>
                                                354.67
                                            </td>
                                            <td className='text-success font-weight-medium'>
                                                <div className='badge badge-success'>
                                                    +0.15%
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className='mb-n1 font-weight-medium'>
                                                    SBUX
                                                </p>
                                                <small className='text-gray'>
                                                    Starbucks Corporation
                                                </small>
                                            </td>
                                            <td className='font-weight-medium'>
                                                08.42
                                            </td>
                                            <td className='text-success font-weight-medium'>
                                                <div className='badge badge-success'>
                                                    +0.67%
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-6 col-sm-12 equel-grid'>
                            <div className='grid'>
                                <div className='grid-body'>
                                    <div className='split-header'>
                                        <p className='card-title'>
                                            Available Balance
                                        </p>
                                        <span
                                            className='btn action-btn btn-xs component-flat'
                                            data-toggle='tooltip'
                                            data-placement='left'
                                            title='Available balance since the last week'
                                        >
                                            <i className='mdi mdi-information-outline text-muted mdi-2x'></i>
                                        </span>
                                    </div>
                                    <div className='d-flex align-items-end mt-2'>
                                        <h3>26.00453100</h3>
                                        <p className='ml-1 font-weight-bold'>
                                            BTC
                                        </p>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <div className='wrapper d-flex pr-4'>
                                            <small className='text-success font-weight-medium mr-2'>
                                                USD
                                            </small>
                                            <small className='text-gray'>
                                                $103,342.50
                                            </small>
                                        </div>
                                        <div className='wrapper d-flex'>
                                            <small className='text-primary font-weight-medium mr-2'>
                                                EUR
                                            </small>
                                            <small className='text-gray'>
                                                $91,105.00
                                            </small>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row mt-4 mb-4'>
                                        <button
                                            className='btn btn-outline-light text-gray component-flat w-50 mr-2'
                                            type='button'
                                        >
                                            SEND
                                        </button>
                                        <button
                                            className='btn btn-primary w-50 ml-2'
                                            type='button'
                                        >
                                            RECEIVE
                                        </button>
                                    </div>
                                    <div className='d-flex mt-5 mb-3'>
                                        <small className='mb-0 text-primary'>
                                            Recent Transaction (3)
                                        </small>
                                    </div>
                                    <div className='d-flex justify-content-between border-bottom py-2'>
                                        <p className='text-black'>
                                            Received Bitcoin
                                        </p>
                                        <p className='text-gray'>
                                            +0.00005462 BTC
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between border-bottom py-2'>
                                        <p className='text-black'>
                                            Sent Bitcoin
                                        </p>
                                        <p className='text-gray'>
                                            -0.00001446 BTC
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between pt-2'>
                                        <p className='text-black'>
                                            Sent Bitcoin
                                        </p>
                                        <p className='text-gray'>
                                            -0.00003573 BTC
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7 col-md-12 equel-grid'>
                            <div className='grid widget-revenue-card'>
                                <div className='grid-body d-flex flex-column h-100'>
                                    <div className='split-header'>
                                        <p className='card-title'>
                                            Server Load
                                        </p>
                                        <div className='content-wrapper v-centered'>
                                            <small className='text-muted'>
                                                2h ago
                                            </small>
                                            <span className='btn action-btn btn-refresh btn-xs component-flat'>
                                                <i className='mdi mdi-autorenew text-muted mdi-2x'></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='mt-auto'>
                                        <canvas
                                            id='cpu-performance'
                                            height='80'
                                        ></canvas>
                                        <h3 className='font-weight-medium mt-4'>
                                            69.05%
                                        </h3>
                                        <p className='text-gray'>
                                            Storage is getting full
                                        </p>
                                        <div className='w-50'>
                                            <div className='d-flex justify-content-between text-muted mt-3'>
                                                <small>Usage</small>{" "}
                                                <small>35.62 GB / 2TB</small>
                                            </div>
                                            <div className='progress progress-slim mt-2'>
                                                <div
                                                    className='progress-bar bg-primary'
                                                    role='progressbar'
                                                    style={{ width: "68%" }}
                                                    aria-valuenow='68'
                                                    aria-valuemin='0'
                                                    aria-valuemax='100'
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8 equel-grid'>
                            <div className='grid'>
                                <div className='grid-body py-3'>
                                    <p className='card-title ml-n1'>
                                        Order History
                                    </p>
                                </div>
                                <div className='table-responsive'>
                                    <table className='table table-hover table-sm'>
                                        <thead>
                                            <tr className='solid-header'>
                                                <th
                                                    colspan='2'
                                                    className='pl-4'
                                                >
                                                    Customer
                                                </th>
                                                <th>Order No</th>
                                                <th>Purchased On</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='pr-0 pl-4'>
                                                    <img
                                                        className='profile-img img-sm'
                                                        src={
                                                            logo
                                                        }
                                                        alt='profile img'
                                                    />
                                                </td>
                                                <td className='pl-md-0'>
                                                    <small className='text-black font-weight-medium d-block'>
                                                        Barbara Curtis
                                                    </small>
                                                    <span className='text-gray'>
                                                        <span className='status-indicator rounded-indicator small bg-primary'></span>
                                                        Account Deactivated{" "}
                                                    </span>
                                                </td>
                                                <td>
                                                    <small>8523537435</small>
                                                </td>
                                                <td> Just Now </td>
                                            </tr>
                                            <tr>
                                                <td className='pr-0 pl-4'>
                                                    <img
                                                        className='profile-img img-sm'
                                                        src={
                                                            logo
                                                        }
                                                        alt='profile img'
                                                    />
                                                </td>
                                                <td className='pl-md-0'>
                                                    <small className='text-black font-weight-medium d-block'>
                                                        Charlie Hawkins
                                                    </small>
                                                    <span className='text-gray'>
                                                        <span className='status-indicator rounded-indicator small bg-success'></span>
                                                        Email Verified{" "}
                                                    </span>
                                                </td>
                                                <td>
                                                    <small>9537537436</small>
                                                </td>
                                                <td> Mar 04, 2018 11:37am </td>
                                            </tr>
                                            <tr>
                                                <td className='pr-0 pl-4'>
                                                    <img
                                                        className='profile-img img-sm'
                                                        src={
                                                            logo
                                                        }
                                                        alt='profile img'
                                                    />
                                                </td>
                                                <td className='pl-md-0'>
                                                    <small className='text-black font-weight-medium d-block'>
                                                        Nina Bates
                                                    </small>
                                                    <span className='text-gray'>
                                                        <span className='status-indicator rounded-indicator small bg-warning'></span>
                                                        Payment On Hold{" "}
                                                    </span>
                                                </td>
                                                <td>
                                                    <small>7533567437</small>
                                                </td>
                                                <td> Mar 13, 2018 9:41am </td>
                                            </tr>
                                            <tr>
                                                <td className='pr-0 pl-4'>
                                                    <img
                                                        className='profile-img img-sm'
                                                        src={
                                                            logo
                                                        }
                                                        alt='profile img'
                                                    />
                                                </td>
                                                <td className='pl-md-0'>
                                                    <small className='text-black font-weight-medium d-block'>
                                                        Hester Richards
                                                    </small>
                                                    <span className='text-gray'>
                                                        <span className='status-indicator rounded-indicator small bg-success'></span>
                                                        Email Verified{" "}
                                                    </span>
                                                </td>
                                                <td>
                                                    <small>5673467743</small>
                                                </td>
                                                <td> Feb 21, 2018 8:34am </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <a
                                    className='border-top px-3 py-2 d-block text-gray'
                                    href='!#'
                                >
                                    <small className='font-weight-medium'>
                                        <i className='mdi mdi-chevron-down mr-2'></i>
                                        View All Order History
                                    </small>
                                </a>
                            </div>
                        </div>
                        <div className='col-md-4 equel-grid'>
                            <div className='grid'>
                                <div className='grid-body'>
                                    <div className='split-header'>
                                        <p className='card-title'>
                                            Activity Log
                                        </p>
                                        <div className='btn-group'>
                                            <button
                                                type='button'
                                                className='btn btn-trasnparent action-btn btn-xs component-flat pr-0'
                                                data-toggle='dropdown'
                                                aria-haspopup='true'
                                                aria-expanded='false'
                                            >
                                                <i className='mdi mdi-dots-vertical'></i>
                                            </button>
                                            <div className='dropdown-menu dropdown-menu-right'>
                                                <a
                                                    className='dropdown-item'
                                                    href='!#'
                                                >
                                                    Expand View
                                                </a>
                                                <a
                                                    className='dropdown-item'
                                                    href='!#'
                                                >
                                                    Edit
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='vertical-timeline-wrapper'>
                                        <div className='timeline-vertical dashboard-timeline'>
                                            <div className='activity-log'>
                                                <p className='log-name'>
                                                    Agnes Holt
                                                </p>
                                                <div className='log-details'>
                                                    Analytics dashboard has been
                                                    created
                                                    <span className='text-primary ml-1'>
                                                        #Slack
                                                    </span>
                                                </div>
                                                <small className='log-time'>
                                                    8 mins Ago
                                                </small>
                                            </div>
                                            <div className='activity-log'>
                                                <p className='log-name'>
                                                    Ronald Edwards
                                                </p>
                                                <div className='log-details'>
                                                    Report has been updated{" "}
                                                    <div className='grouped-images mt-2'>
                                                        <img
                                                            className='img-sm'
                                                            src={
                                                                logo
                                                            }
                                                            alt='Profile Img'
                                                            data-toggle='tooltip'
                                                            title='Gerald Pierce'
                                                        />
                                                        <img
                                                            className='img-sm'
                                                            src={
                                                                logo
                                                            }
                                                            alt='Profile Img'
                                                            data-toggle='tooltip'
                                                            title='Edward Wilson'
                                                        />
                                                        <img
                                                            className='img-sm'
                                                            src={
                                                                logo
                                                            }
                                                            alt='Profile Img'
                                                            data-toggle='tooltip'
                                                            title='Billy Williams'
                                                        />
                                                        <img
                                                            className='img-sm'
                                                            src={
                                                                logo
                                                            }
                                                            alt='Profile Img'
                                                            data-toggle='tooltip'
                                                            title='Lelia Hampton'
                                                        />
                                                        <span className='plus-text img-sm'>
                                                            +3
                                                        </span>
                                                    </div>
                                                </div>
                                                <small className='log-time'>
                                                    3 Hours Ago
                                                </small>
                                            </div>
                                            <div className='activity-log'>
                                                <p className='log-name'>
                                                    Charlie Newton
                                                </p>
                                                <div className='log-details'>
                                                    {" "}
                                                    Approved your request{" "}
                                                    <div className='wrapper mt-2'>
                                                        <button
                                                            type='button'
                                                            className='btn btn-xs btn-primary'
                                                        >
                                                            Approve
                                                        </button>
                                                        <button
                                                            type='button'
                                                            className='btn btn-xs btn-inverse-primary'
                                                        >
                                                            Reject
                                                        </button>
                                                    </div>
                                                </div>
                                                <small className='log-time'>
                                                    2 Hours Ago
                                                </small>
                                            </div>
                                            <div className='activity-log'>
                                                <p className='log-name'>
                                                    Gussie Page
                                                </p>
                                                <div className='log-details'>
                                                    Added new task: Slack home
                                                    page
                                                </div>
                                                <small className='log-time'>
                                                    4 Hours Ago
                                                </small>
                                            </div>
                                            <div className='activity-log'>
                                                <p className='log-name'>
                                                    Ina Mendoza
                                                </p>
                                                <div className='log-details'>
                                                    Added new images
                                                </div>
                                                <small className='log-time'>
                                                    8 Hours Ago
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    className='border-top px-3 py-2 d-block text-gray'
                                    href='!#'
                                >
                                    <small className='font-weight-medium'>
                                        <i className='mdi mdi-chevron-down mr-2'></i>{" "}
                                        View All{" "}
                                    </small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
