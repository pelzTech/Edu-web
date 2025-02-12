import React, { useState } from "react";
import "./CollegeMedical.css";
import { FaHospital, FaStethoscope, FaMicroscope, FaAppleAlt, FaFirstAid,  FaPlus,
  FaMinus } from "react-icons/fa";

const CollegeMedical = () => {
  const [showDepartments, setShowDepartments] = useState(false);

  const handleToggleDepartments = () => {
    setShowDepartments(!showDepartments);
  };

  return (
    <div className="college-medical-container">
      <h1>College of Medical & Health Science</h1>
      <p>Train to become a healthcare professional with top-tier medical education.</p>

      <button onClick={handleToggleDepartments} className="toggle-button">
        {showDepartments ? < FaMinus/> : <FaPlus/>}
      </button>

      {showDepartments && (
        <div className="departments-list">
        
          <ul>
            <li><FaHospital className="icon-style" /> Public Health</li>
            <li><FaStethoscope className="icon-style" /> Medical Lab Science</li>
            <li><FaMicroscope className="icon-style" /> Human Nutrition</li>
            <li><FaFirstAid className="icon-style" /> Nursing</li>
            <li><FaAppleAlt className="icon-style" /> Veterinary Medicine</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CollegeMedical;
