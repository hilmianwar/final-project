import { useState } from "react";
import { useNavigate } from "react-router";
import { registerData } from "../utils/apis/data";

const useRegister = (imageUrl) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [successRegister, setSuccessRegister] = useState("");
  const [errRegister, setErrRegister] = useState("");
  const [showModalRegister, setShowModalRegister] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email || !name || !password || !passwordRepeat || !phoneNumber) {
      setErrRegister("Please fill in all fields");
      setShowModalRegister(true);
      setTimeout(() => {
        setShowModalRegister(false);
        setSuccessRegister("");
      }, 2000);
      return;
    }

    if (password !== passwordRepeat) {
      setErrRegister("Password and confirmation password do not match");
      setShowModalRegister(true);
      setTimeout(() => {
        setShowModalRegister(false);
        setSuccessRegister("");
      }, 2000);
      return; // tidak melanjutkan permintaan ke server jika pass & confirm pass tdk cocok
    }
    registerData(email, name, password, passwordRepeat, imageUrl, phoneNumber)
      .then((res) => {
        setSuccessRegister("Registration was successful!");
        setShowModalRegister(true);
        console.log(res);
        navigate("/login");
        setTimeout(() => {
          setShowModalRegister(false);
          setSuccessRegister("");
        }, 2000); //modal disembunyikan setelah 2 detik
      })
      .catch((err) => {
        setShowModalRegister(true);
        //error jika pass kurang dari 6
        if (err.response.data.errors && err.response.data.errors.length > 0) {
          setErrRegister("Password is too short");
        } else if (err.response.data.message) {
          setErrRegister(err.response.data.message);
        } else {
          // Pesan kesalahan default jika tidak ada yang cocok
          setErrRegister("An error occurred.");
        }
        console.log(err);
        setTimeout(() => {
          setShowModalRegister(false);
          setErrRegister("");
        }, 2000); //modal disembunyikan setelah 2 detik
      });
  };
  return {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    passwordRepeat,
    setPasswordRepeat,
    phoneNumber,
    setPhoneNumber,
    successRegister,
    setSuccessRegister,
    errRegister,
    setErrRegister,
    showModalRegister,
    setShowModalRegister,
    handleSubmit,
  };
};

export default useRegister;
