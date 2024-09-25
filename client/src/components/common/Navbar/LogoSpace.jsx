import React from "react";
import logo from "../../../assests/logo.jpg";
import { Link } from "react-router-dom";
function LogoSpace() {
  return (
    <div className=" max-w-7xl py-2 mx-auto  ">
      <Link to="/">
        <img src={logo} alt="" className="lg:max-h-[150px] max-h-[100px]" />
      </Link>
    </div>
  );
}

export default LogoSpace;
