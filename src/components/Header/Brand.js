import Logo from "../../../src/images/logo.png";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link to="/">
      <img src={Logo} alt="logo" />
    </Link>
  );
};

export default Brand;
