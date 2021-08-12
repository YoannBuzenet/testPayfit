import { useContext } from "react";
import GlobalInformationsContext from "../../../context/globalContext";
import SimpleAccordion from "../../Accordion/Accordion";
import "./style.css";

const Post = ({ match, history }) => {
  const { globalInformations } = useContext(GlobalInformationsContext);

  const currentPost = globalInformations.posts.find(
    (post) => post.id == match.params.id
  );

  // Getting Comments for that post
  const comments = globalInformations.comments.filter(
    (comment) => comment.postId == match.params.id
  );

  return (
    <div className="container">
      <div>
        <p>{currentPost?.title}</p>
        <p>{currentPost?.body}</p>
      </div>

      <div className="postComment">
        <SimpleAccordion arrayOfItems={comments} />
      </div>

      <div className="backToHome">
        <p onClick={(e) => history.push("/")}>Back to Home</p>
      </div>
    </div>
  );
};

export default Post;
