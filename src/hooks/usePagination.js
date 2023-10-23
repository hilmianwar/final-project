import React from "react";

export const usePagination = () => {
  const usersPerPage = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Menghitung indeks pengguna yang akan ditampilkan di halaman saat ini
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = allUser.slice(indexOfFirstUser, indexOfLastUser);

  return { currentPage, setCurrentPage, usersPerPage, handlePageChange };
};
