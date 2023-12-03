import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import "../styles/base.css";

export default function Root() {
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
