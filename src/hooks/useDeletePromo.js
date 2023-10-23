import { useState } from "react";
import { deletePromoData } from "../utils/apis/data";

const useDeletePromo = () => {
  const [successDelete, setSuccessDelete] = useState("");
  const [errDelete, setErrDelete] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleDeletePromo = (id, promo, setPromo) => {
    deletePromoData(id)
      .then((res) => {
        setSuccessDelete("Delete Categories succes");
        setShowModalDelete(true);
        setTimeout(() => {
          setShowModalDelete(false);
          setSuccessDelete("");
        }, 2000); //modal disembunyikan setelah 2 detik
        setPromo(promo.filter((promo) => promo.id !== id)); //otomatis menghapus data tanpa perlu di refresh
      })
      .catch((err) => {
        setErrDelete("Error delete Categories");
        setShowModalDelete(true);
        console.log(err);
        setTimeout(() => {
          setShowModalDelete(false);
          setErrDelete("");
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };
  return {
    handleDeletePromo,
    successDelete,
    errDelete,
    showModalDelete,
    setShowModalDelete,
  };
};

export default useDeletePromo;
