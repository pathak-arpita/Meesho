import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Title = () => (
    <Link to="/" className="nav-ul">
        <ul>
            <li>M</li>
            <li>E</li>
            <li>E</li>
            <li>S</li>
            <li>H</li>
            <li>O</li>
        </ul>
    </Link>
  );
  
  const Header = () => {
    const state = useSelector((state) => state.handelCart)
    const logedUser = JSON.parse(localStorage.getItem("loginDetails"));
    return (
      <div className="nav-header">
        <Title />
  
        <div className="nav-items">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/About" className="nav-link">About</Link></li>
          <li><Link to="/login" className="nav-link">{logedUser === null ? "Login" : "Sign Out"}</Link></li>
          <li><Link to="/cart" className="nav-link">Cart({state.length})</Link></li>
        </ul>
      </div>
      </div>
    );
  };
  
  export default Header;