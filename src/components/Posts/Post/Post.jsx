import { useContext } from "react";
import GlobalInformationsContext from "../../../context/globalContext";

const Post = ({ match }) => {
  const { globalInformations } = useContext(GlobalInformationsContext);

  const currentPost = globalInformations.posts.find(
    (post) => post.id == match.params.id
  );

  return (
    <div>
      <p>{currentPost?.title}</p>
      <p>{currentPost?.body}</p>
    </div>
  );
};

export default Post;
