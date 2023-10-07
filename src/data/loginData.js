import axios from "axios";

const apiKey = "24405e01-fbc1-45a5-9f5a-be13afcd757c";

export const loginData = (email, password) => {
  const payload = {
    email: email,
    password: password,
  };

  const headers = {
    apiKey: apiKey,
    "Content-Type": "application/json",
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

// export { loginData };
