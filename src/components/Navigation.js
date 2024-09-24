import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import logo from "../logo.png";

const Navigation = () => {
  return (
    <Navbar>
      <a href="#">
        <img
          src={logo}
          alt="logo"
          width="134.5"
          height="61"
          className="d-inline-block align-top mx-3"
        />
      </a>
      <Navbar.Brand href="#"></Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
