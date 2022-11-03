import "./css/Reboot.css";
import "./css/Grid.css";
import "./css/Helpers.css";
import "./css/App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
};

export default App;
