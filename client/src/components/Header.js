import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui menu ">
      <Link to="/" className="header item">
        WeCast
      </Link>
      <div className="right menu" />
      <Link to="/" className=" item">
        All Streams
      </Link>
    </div>
  );
};

export default Header;
