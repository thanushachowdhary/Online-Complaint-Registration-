import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">⚖️Online Complaint Registration</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register Complaint</Link></li>
        <li><Link to="/track">Track Complaint</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <div className="nav-buttons">
        {!isLoggedIn ? (
          <>
            <Link to="/signup">
              <button className="signup-btn">Sign Up</button>
            </Link>

            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          </>
        ) : (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>

    </nav>
  );
}

export default Navbar;