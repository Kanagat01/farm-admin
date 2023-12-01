import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./assets/css/style.css";

function App() {
    return (
        <div className='app'>
            <Header />
            <Sidebar />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
