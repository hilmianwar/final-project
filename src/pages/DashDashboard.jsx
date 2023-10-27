import React from "react";
import { useCategories } from "../hooks/useCategories";
import { useAllUser } from "../hooks/useAllUser";
import {
  BiSolidCategory,
  BiImage,
  BiMapAlt,
  BiSolidDiscount,
  BiUser,
} from "react-icons/bi";
import { useBanner } from "../hooks/useBanner";
import { useDestination } from "../hooks/useDestination";
import usePromo from "../hooks/usePromo";
import { useNavigate } from "react-router";
import { useTableResponsive } from "../hooks/useTabelResponsive";

const DashDashboard = () => {
  const { allUser, isLoading } = useAllUser();
  const { banner } = useBanner();
  const { destination } = useDestination();
  const { categories } = useCategories();
  const { promo } = usePromo();
  const { isSmallView, handleResize } = useTableResponsive();
  const navigate = useNavigate();

  window.addEventListener("resize", handleResize);

  if (isLoading) {
    return <div>Loading...</div>; // Menampilkan pesan "Loading..." ketika isLoading adalah true
  }

  return (
    <div className="mx-6 font-mont">
      <div className="my-10">
        <h1 className="text-lg">Dashboard</h1>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto">
        <div className="h-20 w-full flex justify-between items-center px-2 bg-neutral-900 rounded-lg">
          <div>
            <h2 className="text-sm pb-1">Users Data</h2>
            <p className="text-lg font-semibold">{allUser.length}</p>
          </div>
          <div className="flex justify-center items-center h-10 w-10 text-2xl rounded-lg bg-emerald-600 hover:bg-emerald-700">
            <button onClick={() => navigate("/dashboard/user")}>
              <BiUser />
            </button>
          </div>
        </div>
        <div className="h-20 w-full flex justify-between items-center px-2 bg-neutral-900 rounded-lg">
          <div>
            <h2 className="text-sm pb-1">Promo Data</h2>
            <p className="text-lg font-semibold">{promo.length}</p>
          </div>
          <div className="flex justify-center items-center h-10 w-10 text-2xl rounded-lg bg-emerald-600 hover:bg-emerald-700">
            <button onClick={() => navigate("/dashboard/promo")}>
              <BiSolidDiscount />
            </button>
          </div>
        </div>
        <div className="h-20 w-full flex justify-between items-center px-2 bg-neutral-900 rounded-lg">
          <div>
            <h2 className="text-sm pb-1">Destination Data</h2>
            <p className="text-lg font-semibold">{destination.length}</p>
          </div>
          <div className="flex justify-center items-center h-10 w-10 text-2xl rounded-lg bg-emerald-600 hover:bg-emerald-700">
            <button onClick={() => navigate("/dashboard/destination")}>
              <BiMapAlt />
            </button>
          </div>
        </div>
        <div className="h-20 w-full flex justify-between items-center px-2 bg-neutral-900 rounded-lg">
          <div>
            <h2 className="text-sm pb-1">Categories Data</h2>
            <p className="text-lg font-semibold">{categories.length}</p>
          </div>
          <div className="flex justify-center items-center h-10 w-10 text-2xl rounded-lg bg-emerald-600 hover:bg-emerald-700">
            <button onClick={() => navigate("/dashboard/categories")}>
              <BiSolidCategory />
            </button>
          </div>
        </div>

        <div className="h-20 w-full flex justify-between items-center px-2 bg-neutral-900 rounded-lg">
          <div>
            <h2 className="text-sm pb-1">Banner Data</h2>
            <p className="text-lg font-semibold">{banner.length}</p>
          </div>
          <div className="flex justify-center items-center h-10 w-10 text-2xl rounded-lg bg-emerald-600 hover:bg-emerald-700">
            <button onClick={() => navigate("/dashboard/banner")}>
              <BiImage />
            </button>
          </div>
        </div>
      </div>

      {isSmallView ? (
        <div className=" shadow-md rounded my-6 mx-1 font-mont">
          <div className="my-10 px-4">
            <h1 className="text-lg">User</h1>
          </div>
          {allUser.slice(0, 5).map((user) => (
            <div key={user?.id} className="p-4 text-sm">
              <p>
                <span className="font-semibold">Name:</span> {user?.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user?.email}
              </p>
              <p>
                <span className="font-semibold">Phone Number:</span>{" "}
                {user?.phoneNumber}
              </p>
              <p>
                <span className="font-semibold">Role:</span> {user?.role}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="shadow-md rounded my-6 mx-1 lg:mx-1 font-mont">
          <div className="my-4 mb-4">
            <h1 className="text-lg">User</h1>
          </div>
          <table className="w-full bg-neutral-900 rounded-xl">
            <thead>
              <tr className="border-b border-b-neutral-800">
                <th className="px-4 py-2 text-start w-1/4">Name</th>
                <th className="px-4 py-2 text-start w-1/3">Email</th>
                <th className="px-4 py-2 text-start w-1/3">Phone Number</th>
                <th className="px-4 py-2 text-start w-1/5">Role</th>
              </tr>
            </thead>
            <tbody>
              {allUser.slice(0, 5).map((user) => (
                <tr key={user?.id} className="text-sm">
                  <td className="px-4 py-5 w-1/4">{user?.name}</td>
                  <td className="px-4 py-2 w-1/3">{user?.email}</td>
                  <td className="px-4 py-2 w-1/3">{user?.phoneNumber}</td>
                  <td className="px-4 py-2 w-1/5">{user?.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashDashboard;
