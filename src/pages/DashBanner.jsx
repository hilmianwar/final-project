import React, { useState } from "react";
import { format } from "date-fns";
import Pagination from "../components/Pagination";
import { useCategories } from "../hooks/useCategories";
import { useTableResponsive } from "../hooks/useTbaelResponsive";
import { useAddCategories } from "../hooks/useAddCategories";
import AddCategories from "../components/AddCategories";
import UpdateCategories from "../components/UpdateCategories";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";
import useDeleteCategories from "../hooks/useDeleteCategories";
import DeleteModal from "../components/MessageModal";
import AddDestination from "../components/AddDestination";
import { useAddDestination } from "../hooks/useAddDestination";
import useDeleteDestination from "../hooks/useDeleteDestination";
import useUpdateDestination from "../hooks/useUpdateDestination";
import UpdateDestination from "../components/UpdateDestination";
import { useBanner } from "../hooks/useBanner";
import MessageModal from "../components/MessageModal";
import { useAddBanner } from "../hooks/useAddBanner";
import AddBanner from "../components/AddBanner";
import useDeleteBanner from "../hooks/useDeleteBanner";
import useUpdateBanner from "../hooks/useUpdateBanner";
import UpdateBanner from "../components/UpdateBanner";

const DashBanner = () => {
  const { banner, setBanner } = useBanner();
  const { showAddBanner, setShowAddBanner } = useAddBanner();
  const { isSmallView, handleResize } = useTableResponsive();
  const {
    handleDeleteBanner,
    errDelete,
    successDelete,
    showMassageModal,
    setShowMassageModal,
  } = useDeleteBanner();
  const {
    showUpdateBanner,
    setShowUpdateBanner,
    bannerData,
    setBannerData,
    editBannerId,
    setEditBannerId,
  } = useUpdateBanner();

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5; // Jumlah pengguna per halaman

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Menghitung indeks pengguna yang akan ditampilkan di halaman saat ini
  const currentItem = banner.slice(
    (currentPage - 1) * dataPerPage,
    currentPage * dataPerPage
  );

  window.addEventListener("resize", handleResize);

  if (isSmallView) {
    return (
      <div className=" shadow-md rounded my-6 mx-1">
        {/* memunculkan form add banner  */}
        {showAddBanner && (
          <AddBanner
            show={showAddBanner}
            onHide={() => setShowAddBanner(false)}
          />
        )}
        {/* memunculkan form Update banner */}
        {showUpdateBanner && (
          <UpdateBanner
            show={showUpdateBanner}
            onHide={() => setShowUpdateBanner(false)}
            banner={bannerData}
            id={editBannerId}
          />
        )}

        <div className="px-4 mb-4">
          <button
            className="bg-emerald-500 rounded-md p-1 px-2 hover:bg-emerald-600"
            onClick={() => setShowAddBanner(true)}
          >
            Add Banner
          </button>
        </div>
        {currentItem.map((item) => (
          <div key={item.id} className="p-4">
            <p>
              <span className="font-semibold">Name:</span> {item.name}
            </p>
            <p>
              <span className="font-semibold">Created At:</span>{" "}
              {format(new Date(item.createdAt), "dd MMMM yyyy")}
            </p>
            <p>
              <span className="font-semibold">Updated At:</span>{" "}
              {format(new Date(item.updatedAt), "dd MMMM yyyy")}
            </p>
            <p className="flex">
              <span className="font-semibold">Action:</span>
              <span className="flex justify-center items-center px-4 gap-3 text-lg">
                <button
                  onClick={() => handleDeleteBanner(item.id, banner, setBanner)}
                  title="Delete"
                >
                  <RiDeleteBin5Line />
                </button>
                <button
                  onClick={() => {
                    setShowUpdateBanner(true);
                    setEditBannerId(item.id);
                    setBannerData(item);
                  }}
                  title="Update"
                >
                  <AiOutlineEdit />
                </button>
                <button title="Detail">
                  <BiDetail />
                </button>
              </span>
            </p>
          </div>
        ))}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          totalItems={banner.length}
          itemsPerPage={dataPerPage}
        />
        {/* memunculkan pesan error ataupun succes delete*/}
        <MessageModal
          show={showMassageModal}
          err={errDelete}
          succes={successDelete}
        />
      </div>
    );
  } else {
    return (
      <div className="shadow-md rounded my-6 mx-1 lg:mx-10">
        {showAddBanner && (
          <AddBanner
            show={showAddBanner}
            onHide={() => setShowAddBanner(false)}
          />
        )}
        {showUpdateBanner && (
          <UpdateBanner
            show={showUpdateBanner}
            onHide={() => setShowUpdateBanner(false)}
            banner={bannerData}
            id={editBannerId}
          />
        )}
        <div className="flex justify-end mb-4">
          <button
            className="bg-emerald-500 rounded-md p-1 px-2 hover:bg-emerald-600"
            onClick={() => setShowAddBanner(true)}
          >
            Add Banner
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-neutral-900 rounded-md">
              <th className="px-4 py-2 text-start w-1/4">Name</th>
              <th className="px-4 py-2 text-start w-1/3">Created At</th>
              <th className="px-4 py-2 text-start w-1/3">Updated At</th>
              <th className="px-4 py-2 text-start w-1/5">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItem.map((item) => (
              <tr key={item.id} className="text-sm">
                <td className="px-4 h-12 w-1/4">{item.name}</td>
                <td className="px-4 h-12 w-1/3">
                  {format(new Date(item.createdAt), "dd MMMM yyyy")}
                </td>
                <td className="px-4 h-12 w-1/3">
                  {format(new Date(item.updatedAt), "dd MMMM yyyy")}
                </td>
                <td className="flex px-4 h-12 w-1/5 gap-3 text-lg">
                  <button
                    onClick={() =>
                      handleDeleteBanner(item.id, banner, setBanner)
                    }
                    title="Delete"
                  >
                    <RiDeleteBin5Line />
                  </button>
                  <button
                    onClick={() => {
                      setShowUpdateBanner(true);
                      setEditBannerId(item.id);
                      setBannerData(item);
                    }}
                    title="Update"
                  >
                    <AiOutlineEdit />
                  </button>
                  <button title="Detail">
                    <BiDetail />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          totalItems={banner.length}
          itemsPerPage={dataPerPage}
        />
        {/* memunculkan pesan error ataupun succes delete*/}
        <MessageModal
          show={showMassageModal}
          err={errDelete}
          succes={successDelete}
        />
      </div>
    );
  }
};

export default DashBanner;