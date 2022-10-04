import axios from "axios";

const API_URL = "http://localhost:5000/login";

const signUserIn = async (userData) => {
  try {
    const { data } = await axios.post(API_URL, userData, {
      withCredentials: true,
    });

    if (data) {
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.user));
    }
    console.log('etbbte');
    return data;
  } catch ({ message }) {
    return message;
  }
};

const userService = {
  signUserIn,
};

export default userService;
