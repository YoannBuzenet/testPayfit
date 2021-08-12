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
import Comments from "./components/Comments/Comments/Comments";
import Posts from "./components/Posts/Posts/Posts";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Comment from "./components/Comments/Comment/Comment";

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
    console.log("test yo");
    const allPosts = postsAPI.getAllPosts();
    const allUsers = usersAPI.getAllUsers();
    const allComments = commentsAPI.getAllComments();

    Promise.all([allPosts, allUsers, allComments]).then(
      ([allPosts, allUsers, allComments]) => {
        setGlobalInformations({
          users: allUsers,
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
            render={(props) => (
              <div className="App">
                <header className="App-header"></header>
                <div>
                  <Posts />
                  <p>Ok</p>
                </div>
              </div>
            )}
          />
          <Route path="/comment" exact render={(props) => <Comment />} />
        </Switch>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
