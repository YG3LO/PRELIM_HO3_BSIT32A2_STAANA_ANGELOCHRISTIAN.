import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>
        Home
      </Link>
      <Link to="/props-page" style={{ margin: "10px", color: "white" }}>
        Props Page
      </Link>
      <Link to="/todo-list" style={{ margin: "10px", color: "white" }}>
        Todo List
      </Link>
    </nav>
  );
};

export default Navbar;
