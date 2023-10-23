import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";

const NavList = ({ scroll }) => {
  const [click, setClick] = useState(false);

  const content = (
    <>
      <div
        className={`lg:hidden block absolute top-16 w-full left-0 right-0 mt-6 pb-5 transition ${
          scroll ? "bg-black bg-opacity-40" : ""
        }`}
      >
        <ul className="text-center flex flex-col items-center justify-center gap-5 text-xl p-20 h-24  ">
          <Link
            to="/"
            className="text-white text-[17px] cursor-pointer hover:text-emerald-500"
          >
            <li>Home</li>
          </Link>
          <button
            // onClick={handleLogout}
            className="text-white text-[17px] border border-white flex items-center p-1 rounded-lg  ml-2"
          >
            <li>Logout</li>
          </button>
        </ul>
      </div>
    </>
  );

  return (
    <div>
      <div className="font-mont lg:flex items-center justify-end hidden">
        <ul className="flex gap-6 text-white">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/categories">
            <li>Categories</li>
          </Link>
          <Link to="/destination">
            <li>Destination</li>
          </Link>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link>
            <button>
              <li>Logout</li>
            </button>
          </Link>
        </ul>
      </div>

      <div>{click && content}</div>
      <button
        className="block lg:hidden transition z-50 text-white"
        onClick={() => setClick(!click)}
      >
        {click ? <FaTimes /> : <BiMenu className="text-3xl -mt-1" />}
      </button>
    </div>
  );
};

export default NavList;
