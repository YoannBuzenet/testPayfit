import { useContext } from "react";
import GlobalInformationsContext from "../../../context/globalContext";
import utils from "../../../services/utils";
import "./style.css";

const Posts = ({ history }) => {
  const { globalInformations } = useContext(GlobalInformationsContext);

  return (
    <>
      {globalInformations.posts.map((post) => (
        <div onClick={(e) => history.push(`/post/${post.id}`)}>
          <span className="postTitle">
            {utils.capitalizeFirstLetter(post.title)}
          </span>
        </div>
      ))}
    </>
  );
};

export default Posts;
