import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'; 

const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    if (toggle) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [toggle]);

  return (
    <nav className="navbar">
      <div className="logo">
      Eminence <span className="highlight">University</span>
      </div>

    
      <div className={`nav-links ${toggle ? "active" : ""}`}>
        <NavLink to="/" exact className="link" onClick={() => setToggle(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className="link" onClick={() => setToggle(false)}>
          About
        </NavLink>
        <NavLink to="/colleges" className="link" onClick={() => setToggle(false)}>
          Colleges
        </NavLink>
        <NavLink to="/admission" className="link" onClick={() => setToggle(false)}>
          Admission
        </NavLink>
        <NavLink to="/units" className="link" onClick={() => setToggle(false)}>
          Units
        </NavLink>
        <NavLink to="/news" className="link" onClick={() => setToggle(false)}>
          News
        </NavLink>
        <NavLink to="/portals" className="link" onClick={() => setToggle(false)}>
          Portals
        </NavLink>
      </div>

     
      <div className="menu-icons" onClick={() => setToggle((prev) => !prev)}>
        {toggle ? <FaTimes /> : <FaBars />} 
      </div>
    </nav>
  );
};

export default Navbar;
