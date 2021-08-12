import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// Contexts
import GlobalContext from "./context/globalContext";

// APIs
import commentsAPI from "./services/comments";
import usersAPI from "./services/users";
import postsAPI from "./services/posts";

// Components
import Posts from "./components/Posts/Posts/Posts";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Comment from "./components/Comments/Comment/Comment";
import Home from "./Pages/Home";
import Post from "./components/Posts/Post/Post";
import User from "./components/Users/User/User";

// Utils
import utils from "./services/utils";

function App() {
  //State initialization for futures Contexts
  const [globalInformations, setGlobalInformations] = useState({
    users: [],
    comments: [],
    posts: [],
  });

  //Context initialization
  const globalInformationsDefinition = {
    globalInformations,
    setGlobalInformations,
  };

  useEffect(() => {
    const allPosts = postsAPI.getAllPosts();
    const allUsers = usersAPI.getAllUsers();
    const allComments = commentsAPI.getAllComments();

    Promise.all([allPosts, allUsers, allComments]).then(
      ([allPosts, allUsers, allComments]) => {
        setGlobalInformations({
          users: utils.transformArrayIntoDictionnaryWithKey(allUsers),
          comments: allComments,
          posts: allPosts,
        });
      }
    );
  }, []);

  return (
    <GlobalContext.Provider value={globalInformationsDefinition}>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={({ history }) => <Home history={history} />}
          />
          <Route
            path="/post/:id"
            exact
            render={({ match, history }) => (
              <Post match={match} history={history} />
            )}
          />
          <Route
            path="/user/:id"
            exact
            render={({ match, history }) => (
              <User match={match} history={history} />
            )}
          />
        </Switch>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
