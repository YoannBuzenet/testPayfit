import { useContext } from "react";
import GlobalInformationsContext from "../../../context/globalContext";
import ContainedButtons from "../../Button/Button";

const User = ({ match, history }) => {
  const { globalInformations } = useContext(GlobalInformationsContext);

  const userId = match.params.id;

  const user = globalInformations.users?.[userId];

  return (
    <div className="container">
      <h1>{user?.name}</h1>

      <p>Username : {user?.username}</p>
      <p>Email : {user?.email}</p>
      <p>Website : {user?.website}</p>

      <div className="backToHome">
        <ContainedButtons
          onClickFunction={(e) => history.push("/")}
          text={"Back to Home"}
        />
      </div>
    </div>
  );
};

export default User;
