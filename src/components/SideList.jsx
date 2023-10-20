import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
  BiSolidCategory,
  BiImage,
  BiMapAlt,
  BiSolidDiscount,
  BiUser,
} from "react-icons/bi";

const SideList = ({ open }) => {
  const sideList = [
    { title: "Banner", icon: <BiImage /> },
    { title: "Categories", icon: <BiSolidCategory /> },
    { title: "Destination", icon: <BiMapAlt /> },
    { title: "Promo", icon: <BiSolidDiscount /> },
    { title: "User", icon: <BiUser /> },
  ];
  const location = useLocation();
  return (
    <div>
      <ul className="flex flex-col gap-6 text-white pt-20">
        {sideList.map((item, sidebar) => {
          const isActive =
            location.pathname === `/dashboard/${item.title.toLowerCase()}`;
          return (
            <Link to={`/dashboard/${item.title.toLowerCase()}`} key={sidebar}>
              <li
                className={`flex items-center hover:text-emerald-500 hover:duration-300 ${
                  isActive ? "text-emerald-500" : ""
                }`}
              >
                <span className="mr-2 text-2xl">{item.icon}</span>
                {open ? item.title : ""}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideList;
