import axios from "axios";
import { useState } from "react";

export const useUploadImage = () => {
  const [imageUrl, setImageUrl] = useState([]);
  const [err, setErr] = useState("");
  const [showMessageModal, setShowMassageModal] = useState(false);

  const handleUploadImage = (file) => {
    const data = new FormData();
    data.append("image", file);

    const token = localStorage.getItem("token");

    const headers = {
      apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
      Authorization: `Bearer ${token}`,
    };

    axios
      .post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
        data,
        { headers: headers }
      )
      .then((res) => {
        setImageUrl([res.data.url]);
        console.log(res.data.url);
      })
      .catch((error) => {
        console.log("Error during image upload:", error);
        setErr("Error uploading image");
        setShowMassageModal(true);
        setTimeout(() => {
          setShowMassageModal(false);
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };

  return { imageUrl, setImageUrl, handleUploadImage, setErr, showMessageModal };
};
