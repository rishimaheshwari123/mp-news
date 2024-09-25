import React from "react";
import logo from "../../../assests/logo.jpg";
import { Link } from "react-router-dom";
function LogoSpace() {
  return (
    <div className=" max-w-7xl py-2 mx-auto  ">
<<<<<<< HEAD
      <Link to={"/"} className=" flex justify-center m ">
        <img src={logo} alt="" className="lg:max-h-[150px] max-h-[100px]" />
      </Link>
=======
      <div className=" flex justify-center m ">
      <Link to="/">
      <img src={logo} alt="" className="lg:max-h-[150px] max-h-[100px]" />
      </Link>
      </div>
>>>>>>> dd2d97610a3793a85ddad8853df3956bcf743116
    </div>
  );
}

export default LogoSpace;
