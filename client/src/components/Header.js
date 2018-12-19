import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary  menu ">
      <Link to="/" className="header item">
        <h3>WeCast</h3>
      </Link>
      <div className="right menu" />
      <Link to="/" className=" item">
        All Streams
      </Link>
      <GoogleAuth />
    </div>
  );
};

export default Header;
