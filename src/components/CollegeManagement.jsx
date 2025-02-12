import React, { useState } from "react";
import "./CollegeManagement.css";
import { FaRegBuilding, FaUsers, FaCalculator, FaUniversity, FaDollarSign, FaMoneyCheck, FaPlus,
  FaMinus } from "react-icons/fa";

const CollegeManagement = () => {
  const [showDepartments, setShowDepartments] = useState(false);

  const handleToggleDepartments = () => {
    setShowDepartments(!showDepartments);
  };

  return (
    <div className="college-management-container">
      <h1>College of Management & Social Science</h1>
      <p>
        Develop your leadership and analytical skills in our business and social science programs
      </p>

      <button onClick={handleToggleDepartments} className="toggle-button">
        {showDepartments ? <FaMinus/> : <FaPlus/>}
      </button>

      {showDepartments && (
        <div className="departments-list">
    
          <ul>
            <li><FaCalculator className="icon-style" /> Accounting</li>
            <li><FaRegBuilding className="icon-style" /> Business Administration</li>
            <li><FaUniversity className="icon-style" /> Economics</li>
            <li><FaUsers className="icon-style" /> Sociology</li>
            <li><FaDollarSign className="icon-style" /> Political Science</li>
            <li><FaMoneyCheck className="icon-style" /> Banking & Finance</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CollegeManagement;
