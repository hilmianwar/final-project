import React, { useState } from "react";
import Logo from "./Logo";
import NavList from "./NavList";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={`flex justify-between px-20 md:px-32 py-8 fixed transition w-full z-50 ${
        scroll ? "bg-black bg-opacity-40 " : ""
      }`}
    >
      <Logo />
      <NavList scroll={scroll} />
    </header>
  );
};

export default Header;
