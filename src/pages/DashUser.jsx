import React, { useState } from "react";
import { useAllUser } from "../hooks/useAllUser";
import Pagination from "../components/Pagination";
import { useTableResponsive } from "../hooks/useTabelResponsive";

const User = () => {
  const { allUser, isLoading, errUser, search, setSearch } = useAllUser();
  const { isSmallView, handleResize } = useTableResponsive();
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Jumlah pengguna per halaman

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Menghitung indeks pengguna yang akan ditampilkan di halaman saat ini
  const currentUsers = allUser.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  window.addEventListener("resize", handleResize);

  if (isLoading) {
    return <div>Loading...</div>; // Menampilkan pesan "Loading..." ketika isLoading adalah true
  }

  if (errUser) {
    return <div>{errUser}</div>; //menampilkan pesan error ketika errUser adalah true
  }

  if (isSmallView) {
    return (
      <div className=" shadow-md rounded my-6 mx-1 font-mont">
        <div className="my-10 px-4">
          <h1 className="text-lg">User</h1>
        </div>
        <div className="px-4 mb-4">
          <input
            type="text"
            placeholder="search"
            className="bg-neutral-900 p-1 rounded-md mt-4"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {currentUsers
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item?.name.toLowerCase().includes(search);
          })
          .map((user) => (
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
        <Pagination
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          totalItems={allUser?.length}
          itemsPerPage={usersPerPage}
        />
      </div>
    );
  } else {
    return (
      <div className="shadow-md rounded my-6 mx-1 lg:mx-10 font-mont">
        <div className="my-10 mb-12">
          <h1 className="text-lg">User</h1>
        </div>
        <div className="flex justify-between mb-4 mt-4 items-center">
          <div>
            <input
              type="text"
              placeholder="search"
              className="bg-neutral-900 p-1 rounded-md"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-neutral-900 rounded-md">
              <th className="px-4 py-2 text-start w-1/4">Name</th>
              <th className="px-4 py-2 text-start w-1/3">Email</th>
              <th className="px-4 py-2 text-start w-1/3">Phone Number</th>
              <th className="px-4 py-2 text-start w-1/5">Role</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers
              ?.filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item?.name.toLowerCase().includes(search);
              })
              .map((user) => (
                <tr key={user?.id} className="text-sm">
                  <td className="px-4 py-5 w-1/4">{user?.name}</td>
                  <td className="px-4 py-2 w-1/3">{user?.email}</td>
                  <td className="px-4 py-2 w-1/3">{user?.phoneNumber}</td>
                  <td className="px-4 py-2 w-1/5">{user?.role}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          totalItems={allUser?.length}
          itemsPerPage={usersPerPage}
        />
      </div>
    );
  }
};

export default User;
