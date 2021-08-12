import React from "react";

export default React.createContext({
  globalInformations: { users: [], comments: [], posts: [] },
  setGlobalInformations: (value) => {},
});
