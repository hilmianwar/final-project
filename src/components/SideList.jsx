import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  BiSolidCategory,
  BiImage,
  BiMapAlt,
  BiSolidDiscount,
  BiUser,
  BiHome,
} from "react-icons/bi";

const SideList = ({ open }) => {
  const sideList = [
    { title: "Home", icon: <BiHome />, path: "/" },
    { title: "Dashboard", icon: <AiOutlineDashboard />, path: "/dashboard" },
    { title: "Banner", icon: <BiImage />, path: "/dashboard/banner" },
    {
      title: "Categories",
      icon: <BiSolidCategory />,
      path: "/dashboard/categories",
    },
    {
      title: "Destination",
      icon: <BiMapAlt />,
      path: "/dashboard/destination",
    },
    { title: "Promo", icon: <BiSolidDiscount />, path: "/dashboard/promo" },
    { title: "User", icon: <BiUser />, path: "/dashboard/user" },
  ];
  const location = useLocation();
  return (
    <div>
      <ul className="flex flex-col gap-6 text-white pt-20 font-mont">
        {sideList.map((item, sidebar) => {
          const isActive = location.pathname === item.path;
          return (
            <Link to={item.path} key={sidebar}>
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
