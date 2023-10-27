import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { BiMenu } from "react-icons/bi";
import SideList from "./SideList";

const Sidebar = () => {
  const [open, setOpen] = useState(() => {
    // menginisialisasi open dengan nilai awal seperti di bawah
    const storedOpen = localStorage.getItem("open");
    return storedOpen ? JSON.parse(storedOpen) : true;
  });

  useEffect(() => {
    // Simpan nilai 'open' di dalam localStorage setiap kali nilainya berubah.
    localStorage.setItem("open", JSON.stringify(open));
  }, [open]);

  const handleResize = () => {
    if (window.innerWidth <= 900) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  window.addEventListener("resize", handleResize);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-screen sticky top-0">
      <div>
        <div
          className={`${
            open ? " w-60 " : "w-2"
          }flex-col font-monts p-6  bg-neutral-900 h-screen
        `}
        >
          <div className="flex justify-between items-center">
            {open ? <Logo /> : ""}
            <button
              onClick={toggleSidebar}
              className="text-2xl -mt-2 hover:text-emerald-500 hover:duration-300"
            >
              <BiMenu />
            </button>
          </div>

          <SideList open={open} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
