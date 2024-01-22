import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Pagination from "../components/Pagination";
import { useCategories } from "../hooks/useCategories";
import { useAddCategories } from "../hooks/useAddCategories";
import AddCategories from "../components/AddCategories";
import UpdateCategories from "../components/UpdateCategories";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";
import useDeleteCategories from "../hooks/useDeleteCategories";
import useUpdateCategories from "../hooks/useUpdateCategories";
import MessageModal from "../components/MessageModal";
import { useNavigate } from "react-router";
import { useTableResponsive } from "../hooks/useTabelResponsive";

const DashCategories = () => {
  const [triggerCategories, setTriggerCategories] = useState(false);
  const {
    categories,
    setCategories,
    errCategories,
    isLoading,
    search,
    setSearch,
    get,
  } = useCategories();
  const { showAddCategories, setShowAddCategories } = useAddCategories();
  const { isSmallView, handleResize } = useTableResponsive();
  const {
    handleDeleteCategories,
    errDelete,
    successDelete,
    showModalDelete,
    setShowModalDelete,
  } = useDeleteCategories();
  const {
    showUpdateCategories,
    setShowUpdateCategories,
    categoriesData,
    setCategoriesData,
    setEditCategoriesId,
    editCategoriesId,
  } = useUpdateCategories();

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5; // Jumlah pengguna per halaman

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Menghitung indeks pengguna yang akan ditampilkan di halaman saat ini
  const currentItem = categories.slice(
    (currentPage - 1) * dataPerPage,
    currentPage * dataPerPage
  );

  useEffect(() => {
    if (!isLoading) {
      get();
    }
  }, [triggerCategories]);

  window.addEventListener("resize", handleResize);

  if (isLoading) {
    return <div>Loading...</div>; // Menampilkan pesan "Loading..." ketika isLoading adalah true
  }

  if (errCategories) {
    return <div>{errCategories}</div>; //menampilkan pesan error ketika errCategories adalah true
  }

  if (isSmallView) {
    return (
      <div className=" shadow-md rounded my-6 mx-1 font-mont">
        {showAddCategories && (
          <AddCategories
            show={showAddCategories}
            onHide={() => setShowAddCategories(false)}
            setTriggerCategories={setTriggerCategories}
            triggerCategories={triggerCategories}
          />
        )}
        {showUpdateCategories && (
          <UpdateCategories
            show={showUpdateCategories}
            onHide={() => setShowUpdateCategories(false)}
            categories={categoriesData}
            id={editCategoriesId}
            setTriggerUpdate={setTriggerCategories}
            triggerUpdate={triggerCategories}
          />
        )}
        <div className="my-10 px-4">
          <h1 className="text-lg">Categories</h1>
        </div>
        <div className="px-4 mb-4">
          <div>
            <button
              className="bg-emerald-500 rounded-md p-1 px-2 hover:bg-emerald-600"
              onClick={() => setShowAddCategories(true)}
            >
              Add Categoris
            </button>
          </div>
          <div>
            <input
              type="text"
              placeholder="search"
              className="bg-neutral-900 p-1 rounded-md mt-4"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {currentItem
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item?.name.toLowerCase().includes(search);
          })
          .map((item) => (
            <div key={item?.id} className="p-4 text-sm">
              <p>
                <span className="font-semibold">Name:</span> {item?.name}
              </p>
              <p>
                <span className="font-semibold">Created At:</span>{" "}
                {format(new Date(item?.createdAt), "dd MMMM yyyy")}
              </p>
              <p>
                <span className="font-semibold">Updated At:</span>{" "}
                {format(new Date(item?.updatedAt), "dd MMMM yyyy")}
              </p>
              <p className="flex">
                <span className="font-semibold">Action:</span>
                <span className="flex justify-center items-center px-4 gap-3 text-lg">
                  <button
                    onClick={() =>
                      handleDeleteCategories(
                        item?.id,
                        categories,
                        setCategories
                      )
                    }
                    title="Delete"
                  >
                    <RiDeleteBin5Line />
                  </button>
                  <button
                    onClick={() => {
                      setShowUpdateCategories(true);
                      setEditCategoriesId(item?.id);
                      setCategoriesData(item);
                    }}
                    title="Update"
                  >
                    <AiOutlineEdit />
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/dashboard/categories/detail/${item?.id}`)
                    }
                    title="Detail"
                  >
                    <BiDetail />
                  </button>
                </span>
              </p>
            </div>
          ))}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          totalItems={categories?.length}
          itemsPerPage={dataPerPage}
        />
        <MessageModal
          show={showModalDelete}
          err={errDelete}
          succes={successDelete}
        />
      </div>
    );
  } else {
    return (
      <div className="shadow-md rounded my-6 mx-1 lg:mx-10 font-mont">
        {showAddCategories && (
          <AddCategories
            show={showAddCategories}
            onHide={() => setShowAddCategories(false)}
            setTriggerCategories={setTriggerCategories}
            triggerCategories={triggerCategories}
          />
        )}
        {showUpdateCategories && (
          <UpdateCategories
            show={showUpdateCategories}
            onHide={() => setShowUpdateCategories(false)}
            categories={categoriesData}
            id={editCategoriesId}
            setTriggerUpdate={setTriggerCategories}
            triggerUpdate={triggerCategories}
          />
        )}
        <div className="mt-10">
          <h1 className="text-lg">Categories</h1>
        </div>
        <div className="flex justify-between mb-4 mt-4">
          <div>
            <input
              type="text"
              placeholder="search"
              className="bg-neutral-900 p-1 rounded-md"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-emerald-500 rounded-md p-1 px-2 hover:bg-emerald-600"
              onClick={() => setShowAddCategories(true)}
            >
              Add Categoris
            </button>
          </div>
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
            {currentItem
              ?.filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item?.name.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item?.id} className="text-sm">
                  <td className="px-4 h-12 w-1/4">{item?.name}</td>
                  <td className="px-4 h-12 w-1/3">
                    {format(new Date(item?.createdAt), "dd MMMM yyyy")}
                  </td>
                  <td className="px-4 h-12 w-1/3">
                    {format(new Date(item?.updatedAt), "dd MMMM yyyy")}
                  </td>
                  <td className="flex px-4 h-12 w-1/5 gap-3 text-lg">
                    <button
                      onClick={() =>
                        handleDeleteCategories(
                          item?.id,
                          categories,
                          setCategories
                        )
                      }
                      title="Delete"
                    >
                      <RiDeleteBin5Line />
                    </button>
                    <button
                      onClick={() => {
                        setShowUpdateCategories(true);
                        setEditCategoriesId(item?.id);
                        setCategoriesData(item);
                      }}
                      title="Update"
                    >
                      <AiOutlineEdit />
                    </button>
                    <button
                      onClick={() =>
                        navigate(`/dashboard/categories/detail/${item?.id}`)
                      }
                      title="Detail"
                    >
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
          totalItems={categories?.length}
          itemsPerPage={dataPerPage}
        />
        <MessageModal
          show={showModalDelete}
          onHide={() => setShowModalDelete(false)}
          err={errDelete}
          succes={successDelete}
        />
      </div>
    );
  }
};

export default DashCategories;
