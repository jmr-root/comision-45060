import "./css/Reboot.css";
import "./css/Grid.css";
import "./css/Helpers.css";
import "./css/App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
};

export default App;
