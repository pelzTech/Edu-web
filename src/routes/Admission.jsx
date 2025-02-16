import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import "./Admission.css";

const Admission = () => {
  return (
    <div className="admission-container">
      <h1 className="admission-title">Admission Process</h1>
      <p className="admission-description">
        Find out how to apply, admission requirements, and deadlines
      </p>

      <h2 className="admission-subtitle">Admission Categories</h2>
      <ul className="admission-list">
        <li className="admission-item">
          <ChevronRight className="admission-icon" />
          <Link to="undergraduate" className="admission-link">
            Undergraduate Admission
          </Link>
        </li>
        <li className="admission-item">
          <ChevronRight className="admission-icon" />
          <Link to="postgraduate" className="admission-link">
            Postgraduate Admission
          </Link>
        </li>
      </ul>

     
      <div className="admission-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Admission;
