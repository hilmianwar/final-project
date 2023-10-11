import React from "react";
import login from "../assets/image/login.jpg";
import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister";

const Register = () => {
  const {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    passwordRepeat,
    setPasswordRepeat,
    profilPicture,
    setProfilPicture,
    err,
    setErr,
    handleSubmit,
  } = useRegister();
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordRepeat, setPasswordRepeat] = useState("");
  // const [profilPicture, setProfilPicture] = useState("");
  // const [err, setErr] = useState("");

  // const navigate = useNavigate();

  // const handleSubmit = () => {
  //   const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";

  //   const payload = {
  //     email: email,
  //     name: name,
  //     password: password,
  //     passwordRepeat: passwordRepeat,
  //     role: "admin",
  //     profilPictureUrl: profilPicture,
  //   };

  //   const headers = {
  //     apiKey: apiKey,
  //     "Content-Type": "application/json",
  //   };
  //   axios
  //     .post(
  //       "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register",
  //       payload,
  //       { headers: headers }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       navigate("/login");
  //     })
  //     .catch((err) => {
  //       setErr(err.response.data.message);
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <div className="bg-black h-screen w-full flex">
        <div className="bg-black relatif w-1/2 h-screen hidden md:block">
          <div className="absolute text-white mt-24 ml-14">
            <h3 className="text-3xl">Jobs Fill Your Pocket, </h3>
            <p className="text-xl">But Adventures Fill Your Soul</p>
          </div>
          <img src={login} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 h-screen text-white">
          <div className="h-full flex flex-col justify-center md:max-w-[550px] mx-auto p-20 gap-8">
            <div>Logo</div>
            <div className="text-3xl">
              <h3>Register</h3>
            </div>
            {!!err.length && (
              <div className=" bg-red-500 p-2 rounded-md flex justify-between">
                <p>{err}</p>
                <button onClick={() => setErr("")}>X</button>
              </div>
            )}
            <div className="flex flex-col">
              <input
                className="rounded-sm mb-2 py-3 bg-transparent border-b border-white outline-none placeholder:text-gray-400"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="rounded-sm mb-2 py-3 bg-transparent border-b border-white outline-none placeholder:text-gray-400"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="rounded-sm mb-2 py-3 bg-transparent border-b border-white outline-none placeholder:text-gray-400"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="rounded-sm mb-2 py-3 bg-transparent border-b border-white outline-none placeholder:text-gray-400"
                type="password"
                placeholder="Confirm Password"
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />
              <input
                className="rounded-sm mb-2 py-3 bg-transparent border-b border-white outline-none placeholder:text-gray-400"
                type="text"
                placeholder="Profil Picture Url"
                value={profilPicture}
                onChange={(e) => setProfilPicture(e.target.value)}
              />
            </div>
            <button
              className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-600"
              onClick={handleSubmit}
            >
              Register
            </button>
            <span className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold underline">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
