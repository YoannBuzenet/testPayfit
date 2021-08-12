import { useContext } from "react";
import GlobalInformationsContext from "../../../context/globalContext";
import SimpleAccordion from "../../Accordion/Accordion";
import ContainedButtons from "../../Button/Button";
import SimplePaper from "../../Paper/Paper";

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
      <div className="postContent">
        <h1>{currentPost?.title}</h1>
        <div className="postBody">
          <SimplePaper elevation={3} text={currentPost?.body} />
        </div>
      </div>

      <div className="postComment">
        <p>Comments</p>
        <SimpleAccordion arrayOfItems={comments} />
      </div>

      <div className="backToHome">
        <ContainedButtons
          onClickFunction={(e) => history.push("/")}
          text={"Back to Home"}
        />
      </div>
    </div>
  );
};

export default Post;
