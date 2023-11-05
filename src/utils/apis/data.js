import axios from "axios";

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
  imageUrl,
  phoneNumber
) => {
  const payload = {
    email: email,
    name: name,
    password: password,
    passwordRepeat: passwordRepeat,
    role: "admin",
    profilePictureUrl: imageUrl,
    phoneNumber: phoneNumber,
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

export const logoutData = () => {
  return axios.get(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/logout",
    { headers: headersAuthor }
  );
};

export const bannerData = () => {
  return axios.get(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners",
    { headers: headers }
  );
};

export const addBannerData = (name, imageUrl) => {
  const payload = {
    name: name,
    imageUrl: imageUrl,
  };
  return axios.post(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-banner",
    payload,
    { headers: headersAuthor }
  );
};

export const deleteBannerData = (id) => {
  return axios.delete(
    `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-banner/${id}`,
    { headers: headersAuthor }
  );
};

export const updateBannerData = (id, name, imageUrl) => {
  const payload = {
    name: name,
    imageUrl: imageUrl,
  };
  return axios.post(
    `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-banner/${id}`,
    payload,
    { headers: headersAuthor }
  );
};

export const categoriesData = () => {
  return axios.get(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories",
    { headers: headers }
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

export const updateCategoriesData = (id, name, imageUrl) => {
  const payload = {
    name: name,
    imageUrl: imageUrl,
  };
  return axios.post(
    `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-category/${id}`,
    payload,
    { headers: headersAuthor }
  );
};

export const destinationData = () => {
  return axios.get(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities",
    { headers: headers }
  );
};

export const addDestinationData = (
  categoryId,
  name,
  description,
  imageUrl,
  price,
  priceDiscount,
  rating,
  totalReviews,
  facilities,
  address,
  province,
  city,
  locationMaps
) => {
  const payload = {
    categoryId: categoryId,
    title: name,
    description: description,
    imageUrls: imageUrl,
    price: parseFloat(price),
    price_discount: parseFloat(priceDiscount),
    rating: parseFloat(rating),
    total_reviews: parseFloat(totalReviews),
    facilities: facilities,
    address: address,
    province: province,
    city: city,
    location_maps: locationMaps,
  };
  return axios.post(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-activity",
    payload,
    { headers: headersAuthor }
  );
};

export const deleteDestinationData = (id) => {
  return axios.delete(
    `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-activity/${id}`,
    { headers: headersAuthor }
  );
};

export const UpdateDestinationData = (
  id,
  categoryId,
  name,
  description,
  imageUrl,
  price,
  priceDiscount,
  rating,
  totalReviews,
  facilities,
  address,
  province,
  city,
  locationMaps
) => {
  const payload = {
    categoryId: categoryId,
    title: name,
    description: description,
    imageUrls: imageUrl,
    price: parseFloat(price),
    price_discount: parseFloat(priceDiscount),
    rating: parseFloat(rating),
    total_reviews: parseFloat(totalReviews),
    facilities: facilities,
    address: address,
    province: province,
    city: city,
    location_maps: locationMaps,
  };
  return axios.post(
    `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-activity/${id}`,
    payload,
    { headers: headersAuthor }
  );
};

export const promoData = () => {
  return axios.get(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos",
    { headers: headers }
  );
};

export const addPromoData = (
  name,
  description,
  imageUrl,
  condition,
  promCode,
  promDiscPrice,
  minClaimPrice
) => {
  const payload = {
    title: name,
    description: description,
    imageUrl: imageUrl,
    terms_condition: condition,
    promo_code: promCode,
    promo_discount_price: parseFloat(promDiscPrice),
    minimum_claim_price: parseFloat(minClaimPrice),
  };
  return axios.post(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-promo",
    payload,
    { headers: headersAuthor }
  );
};

export const updatePromoData = (
  id,
  name,
  description,
  imageUrl,
  condition,
  promCode,
  promDiscPrice,
  minClaimPrice
) => {
  const payload = {
    title: name,
    description: description,
    imageUrl: imageUrl,
    terms_condition: condition,
    promo_code: promCode,
    promo_discount_price: parseFloat(promDiscPrice),
    minimum_claim_price: parseFloat(minClaimPrice),
  };
  return axios.post(
    `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-promo/${id}`,
    payload,
    { headers: headersAuthor }
  );
};

export const deletePromoData = (id) => {
  return axios.delete(
    `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-promo/${id}`,
    { headers: headersAuthor }
  );
};

export const allUserData = () => {
  return axios.get(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user",
    { headers: headersAuthor }
  );
};

export const profilData = () => {
  return axios.get(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user",
    { headers: headersAuthor }
  );
};

export const updateProfilData = (name, email, imageUrl, phoneNumber) => {
  const payload = {
    name: name,
    email: email,
    profilePictureUrl: imageUrl,
    phoneNumber: phoneNumber,
  };
  return axios.post(
    "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-profile",
    payload,
    { headers: headersAuthor }
  );
};
