import { Link, Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="d-flex row m-3 p-3 bg-dark text-white vh-100">
      <div className="d-flex col justify-content-around m-3 align-items-center">
        <Link
          className={"font-weight-bold text-white link-underline-dark fs-3"}
          to={"/"}
        >
          Home
        </Link>
        <Link
          className={"font-weight-bold text-white link-underline-dark fs-3"}
          to={"/flashcards"}
        >
          My Flashcards
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
