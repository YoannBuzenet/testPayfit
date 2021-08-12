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

function App() {
  //State initialization for futures Contexts
  const [globalInformations, setGlobalInformations] = useState({});

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
          users: allUsers,
          comments: allComments,
          posts: allPosts,
        });
      }
    );
  }, []);

  return (
    <GlobalContext.Provider value={globalInformationsDefinition}>
      <div className="App">
        <header className="App-header"></header>
        <div>
          <Posts />
          <p>Ok</p>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
