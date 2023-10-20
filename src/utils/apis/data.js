import axios from "axios";
import { useParams } from "react-router";

const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
const token = localStorage.getItem("token");

const headers = {
  apiKey: apiKey,
  "Content-Type": "application/json",
};

const headersAuthor = {
  apiKey: apiKey,
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
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

export const activitiesData = () => {
  return axios.get(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities",
    { headers: headers }
  );
};

export const promoData = () => {
  return axios.get(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos",
    { headers: headers }
  );
};

export const allUserData = () => {
  return axios.get(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user",
    { headers: headersAuthor }
  );
};

export const addCategoriesData = (name, imageUrl) => {
  const payload = {
    name: name,
    imageUrl: imageUrl,
  };
  return axios.post(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-category",
    payload,
    { headers: headersAuthor }
  );
};

export const deleteCategoriesData = (id) => {
  return axios.delete(
    `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-category/${id}`,
    { headers: headersAuthor }
  );
};

export const addPromoData = (name, imageUrl) => {
  const payload = {
    name: name,
    imageUrl: imageUrl,
  };
  return axios.post(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-promo",
    payload,
    { headers: headersAuthor }
  );
};
