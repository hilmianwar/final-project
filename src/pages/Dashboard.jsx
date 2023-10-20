import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="text-white flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1 pt-10 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
