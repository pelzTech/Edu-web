import React, { useState } from "react";
import './CollegeArt.css';
import { FaTheaterMasks, FaBookOpen, FaVideo, FaRegFileAlt, FaCross, FaPlus, FaMinus } from "react-icons/fa";

const CollegeArt = () => {
  const [showDepartments, setShowDepartments] = useState(false);

  const handleToggleDepartments = () => {
    setShowDepartments(!showDepartments);
  };

  return (
    <div className="college-art-container">
      <h1>College of Art</h1>
      <p>Welcome to the College of Art<br /> Below you'll find the list of departments</p>

      <button onClick={handleToggleDepartments} className="toggle-button">
        {showDepartments ? <FaMinus /> : <FaPlus />} {/* Use FaMinus for hide, FaPlus for view */}
      </button>

      {showDepartments && (
        <div className="departments-list">
          <ul>
            <li><FaTheaterMasks className="icon-style" /> Theater Art</li>
            <li><FaBookOpen className="icon-style" /> Philosophy</li>
            <li><FaVideo className="icon-style" /> Mass Communication</li>
            <li><FaRegFileAlt className="icon-style" /> English</li>
            <li><FaCross className="icon-style" /> Religious Studies</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CollegeArt;
