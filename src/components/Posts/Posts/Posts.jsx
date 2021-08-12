import { useContext } from "react";
import GlobalInformationsContext from "../../../context/globalContext";

const Posts = ({ history }) => {
  const { globalInformations } = useContext(GlobalInformationsContext);

  // Que le titre du post
  // Voir le post

  return (
    <>
      {globalInformations.posts.map((post) => (
        <div onClick={(e) => history.push(`/post/${post.id}`)}>
          {post.title}
        </div>
      ))}
    </>
  );
};

export default Posts;
