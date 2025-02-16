import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaUniversity,
  FaGraduationCap,
  FaUserGraduate,
  FaAccessibleIcon,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import "./CollegeEducation.css";

const CollegeEducation = () => {
  const [showDepartments, setShowDepartments] = useState(false);

  const handleToggleDepartments = () => {
    setShowDepartments(!showDepartments);
  };

  return (
    <div className="college-education-container">
      <h1>College of Education</h1>
      <p>Explore various educational disciplines to become a professional educator.</p>

      <button onClick={handleToggleDepartments} className="toggle-button">
        {showDepartments ? <FaMinus /> : <FaPlus />} 
      </button>

      {showDepartments && (
        <ul className="departments-list">
          <li>
            <FaChalkboardTeacher className="icon-style" />
            <Link to="/colleges/education/primary">Primary Education</Link>
          </li>
          <li>
            <FaBookOpen className="icon-style" />
            <Link to="/colleges/education/secondary">Secondary Education</Link>
          </li>
          <li>
            <FaUniversity className="icon-style" />
            <Link to="/colleges/education/tertiary">Tertiary Education</Link>
          </li>
          <li>
            <FaGraduationCap className="icon-style" />
            <Link to="/colleges/education/special">Special Education</Link>
          </li>
          <li>
            <FaUserGraduate className="icon-style" />
            <Link to="/colleges/education/management">Educational Management</Link>
          </li>
          <li>
            <FaAccessibleIcon className="icon-style" />
            <Link to="/colleges/education/adult">Adult Education</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CollegeEducation;
