import React, { useState } from "react";
import "./CollegeLaw.css";
import { FaGavel, FaBalanceScale, FaGlobe, 
  FaBuilding, FaHandHoldingHeart,  FaPlus,
  FaMinus } from "react-icons/fa";

const CollegeLaw = () => {
  const [showDepartments, setShowDepartments] = useState(false);

  const handleToggleDepartments = () => {
    setShowDepartments(!showDepartments);
  };

  return (
    <div className="college-law-container">
      <h1>College of Law</h1>
      <p>Study the principles of justice and prepare for a legal career.</p>

      <button onClick={handleToggleDepartments} className="toggle-button">
        {showDepartments ? <FaMinus/> : < FaPlus/>}
      </button>

      {showDepartments && (
        <div className="departments-list">
         
          <ul>
            <li><FaGavel className="icon-style" /> Criminal Law</li>
            <li><FaBalanceScale className="icon-style" /> International Law</li>
            <li><FaGlobe className="icon-style" /> Civil Law</li>
            <li><FaBuilding className="icon-style" /> Corporate Law</li>
            <li><FaHandHoldingHeart className="icon-style" /> Constitutional Law</li>
            <li><FaBalanceScale className="icon-style" /> Human Rights Law</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CollegeLaw;
