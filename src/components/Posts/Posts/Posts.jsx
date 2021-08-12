import { useContext } from "react";
import GlobalInformationsContext from "../../../context/globalContext";
import utils from "../../../services/utils";
import ImgMediaCard from "../../Card/Card";
import "./style.css";

const Posts = ({ history }) => {
  const { globalInformations } = useContext(GlobalInformationsContext);

  return (
    <div className="postsContainer">
      {globalInformations.posts.map((post, index) => (
        <div onClick={(e) => history.push(`/post/${post.id}`)}>
          <ImgMediaCard
            item={post}
            author={globalInformations.users[post.userId].email}
            pictureURL={`https://picsum.photos/id/${index + 10}/200/300`}
          />
        </div>
      ))}
    </div>
  );
};

export default Posts;
