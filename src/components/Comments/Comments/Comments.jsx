import { useContext } from "react";
import GlobalInformationsContext from "../../../context/globalContext";

const Comments = (arrayOfComments) => {
  const { globalInformations } = useContext(GlobalInformationsContext);

  return (
    <>
      {globalInformations.comments.map((comment) => (
        <p>{comment.name}</p>
      ))}
    </>
  );
};

export default Comments;
