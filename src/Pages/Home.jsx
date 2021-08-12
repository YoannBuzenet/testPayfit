import Posts from "../components/Posts/Posts/Posts";

const Home = ({ history }) => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <Posts history={history} />
      </div>
    </div>
  );
};

export default Home;
