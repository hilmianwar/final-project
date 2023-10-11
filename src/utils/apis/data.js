import axios from "axios";

const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";

const headers = {
  apiKey: apiKey,
  "Content-Type": "application/json",
};

export const loginData = (email, password) => {
  const payload = {
    email: email,
    password: password,
  };

  return axios
    .post(
      "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login",
      payload,
      { headers: headers }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

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

export const bannerData = () => {
  return axios.get(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners",
    { headers: headers }
  );
};

export const categoriesData = () => {
  return axios.get(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories",
    { headers: headers }
  );
};
