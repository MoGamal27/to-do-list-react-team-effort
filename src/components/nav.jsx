import { Link } from "react-router-dom";
import "../styles/nav.css";
function Nav() {
  return (
    <>
      <nav>
        <div className="logo">TaskMaster</div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/new">Make a New Plan</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
