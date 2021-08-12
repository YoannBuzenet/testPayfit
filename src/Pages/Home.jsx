import Posts from "../components/Posts/Posts/Posts";
import "./style.css";

const Home = ({ history }) => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <h1>Blog Posts</h1>
        <div className="postContainer">
          <Posts history={history} />
        </div>
      </div>
    </div>
  );
};

export default Home;
