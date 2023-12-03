import { Outlet } from "react-router-dom";

import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

export default function Root() {
    return (
        <div className='app'>
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
        </div>
    );
}
