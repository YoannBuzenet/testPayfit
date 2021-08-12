import axios from "axios";

function getAllComments() {
  return axios
    .get(process.env.REACT_APP_API_URL + "/comments")
    .then((resp) => resp.data);
}

export default {
  getAllComments,
};
