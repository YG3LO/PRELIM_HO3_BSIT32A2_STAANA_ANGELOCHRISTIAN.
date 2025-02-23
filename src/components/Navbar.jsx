import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <Link to="/" style={styles.navLink}>
          Home
        </Link>
        <Link to="/props-page" style={styles.navLink}>
          Props Page
        </Link>
        <Link to="/todo-list" style={styles.navLink}>
          Todo List
        </Link>
      </div>
    </nav>
  );
};

// Modern Styling
const styles = {
  navbar: {
    background: "#007bff",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  navContainer: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out",
  },
};

// Hover effect using JavaScript
styles.navLink["&:hover"] = {
  color: "#ffeb3b",
  transform: "scale(1.1)",
};

export default Navbar;
