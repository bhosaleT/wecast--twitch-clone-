import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui menu ">
      <Link to="/" className="header item">
        We Cast
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
