import { useContext } from "react";
import GlobalInformationsContext from "../../../context/globalContext";
import ContainedButtons from "../../Button/Button";

const User = ({ match, history }) => {
  const { globalInformations } = useContext(GlobalInformationsContext);

  const userId = match.params.id;

  return (
    <div className="container">
      <h1>{globalInformations.users?.[userId]?.name}</h1>

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
