import axios from "axios";

function getAllUsers() {
  return axios
    .get(process.env.REACT_APP_API_URL + "/users")
    .then((resp) => resp.data);
}

export default {
  getAllUsers,
};
