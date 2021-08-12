import axios from "axios";

function getAllPosts() {
  return axios
    .get(process.env.REACT_APP_API_URL + "/posts")
    .then((resp) => resp.data);
}

export default {
  getAllPosts,
};
