import { Routing } from "~/pages";
import { withProviders } from "./providers";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";

const App = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default withProviders(App);
