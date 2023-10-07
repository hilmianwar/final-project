import axios from "axios";
const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";

export const registerData = (
  email,
  name,
  password,
  passwordRepeat,
  profilPicture
) => {
  const payload = {
    email: email,
    name: name,
    password: password,
    passwordRepeat: passwordRepeat,
    role: "admin",
    profilPictureUrl: profilPicture,
  };
  const headers = {
    apiKey: apiKey,
    "Content-Type": "application/json",
  };
  return axios
    .post(
      "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register",
      payload,
      { headers: headers }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};
