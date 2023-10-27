import { useState } from "react";
import { deleteDestinationData } from "../utils/apis/data";

const useDeleteDestination = () => {
  const [successDelete, setSuccessDelete] = useState("");
  const [errDelete, setErrDelete] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleDeleteDestination = (id, destination, setDestination) => {
    deleteDestinationData(id)
      .then((res) => {
        setSuccessDelete("Delete Destination success");
        setShowModalDelete(true);
        setTimeout(() => {
          setShowModalDelete(false);
          setSuccessDelete("");
        }, 2000); //modal disembunyikan setelah 2 detik
        setDestination(
          destination.filter((destination) => destination.id !== id)
        ); //otomatis menghapus data tanpa perlu di refresh
      })
      .catch((err) => {
        setErrDelete("Error delete Destination");
        setShowModalDelete(true);
        console.log(err);
        setTimeout(() => {
          setShowModalDelete(false);
          setErrDelete("");
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };
  return {
    handleDeleteDestination,
    successDelete,
    errDelete,
    showModalDelete,
    setShowModalDelete,
  };
};

export default useDeleteDestination;
