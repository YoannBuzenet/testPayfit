import { useContext } from "react";
import GlobalInformationsContext from "../../../context/globalContext";

const Users = (arrayOfUsers) => {
  const { globalInformations } = useContext(GlobalInformationsContext);

  return <>Users</>;
};

export default Users;
