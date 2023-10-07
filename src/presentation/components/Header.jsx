import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";

const Header = () => {
  return (
    <header className="flex">
      <Logo />
      <NavList />
    </header>
  );
};

export default Header;
