import React from "react";
import logo from "../../logo.svg";

const Header = (props) => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {props.children}
      </header>
    </div>
  );
};

export default Header;
