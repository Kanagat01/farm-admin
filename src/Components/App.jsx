import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../styles/base.css";
import "../styles/forms.css";
import "../styles/buttons.css";
import "../styles/table.css";
import "../styles/Sidebar.css";
import "../styles/Header.css";
import "../styles/Login.css";

export default function App() {
    return (
        <div className='app'>
            <Header />
            <div className='d-flex'>
                <Sidebar />
                <div
                    className='d-flex flex-column flex-grow-1'
                    style={{ height: "90vh" }}
                >
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    );
}
