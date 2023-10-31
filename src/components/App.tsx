import { Link, Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="d-flex row m-3 p-3">
      <div className="d-flex col justify-content-around m-3">
        <Link to={"/"}>Home</Link>
        <Link to={"/flashcards"}>My Flashcards</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
