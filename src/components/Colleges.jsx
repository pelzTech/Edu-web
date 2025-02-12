import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon from react-icons
import './Colleges.css'; // Import the CSS for styling

const Colleges = () => {
    return (
        <div className="colleges-container">
            <header className="colleges-header">
                <h1>Our Colleges</h1>
                <p>Explore our various colleges offering diverse courses and programs.</p>
            </header>

            <section className="colleges-list">
                <ul>
                    <li className="college-item">
                        <Link to="arts" className="college-link">
                            <span>College of Arts</span>
                            <FaArrowRight className="arrow-icon" />
                        </Link>
                    </li>
                    <li className="college-item">
                        <Link to="management" className="college-link">
                            <span>College of Management & Social Science</span>
                            <FaArrowRight className="arrow-icon" />
                        </Link>
                    </li>
                    <li className="college-item">
                        <Link to="medical" className="college-link">
                            <span>College of Medical & Health Science</span>
                            <FaArrowRight className="arrow-icon" />
                        </Link>
                    </li>
                    <li className="college-item">
                        <Link to="law" className="college-link">
                            <span>College of Law</span>
                            <FaArrowRight className="arrow-icon" />
                        </Link>
                    </li>
                    <li className="college-item">
                        <Link to="education" className="college-link">
                            <span>College of Education</span>
                            <FaArrowRight className="arrow-icon" />
                        </Link>
                    </li>
                </ul>
            </section>

            {/* Outlet for rendering sub-routes */}
            <Outlet />
        </div>
    );
};

export default Colleges;
