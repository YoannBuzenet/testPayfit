import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect } from "react";
import commentsAPI from "./services/comments";
import usersAPI from "./services/users";
import postsAPI from "./services/posts";

function App() {
  useEffect(() => {
    const allPosts = postsAPI.getAllPosts();
    const allUsers = usersAPI.getAllUsers();
    const allComments = commentsAPI.getAllComments();

    Promise.all([allPosts, allUsers, allComments]).then(
      ([allPosts, allUsers, allComments]) => {
        console.log("allPosts", allPosts);
        console.log("allUsers", allUsers);
        console.log("allComments", allComments);
      }
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
