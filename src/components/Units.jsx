// unit-page.jsx

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import './Units.css';

const Units = () => {
  return (
    <div className="units-page">
      <header className="header">
        <h1>University Units</h1>
        <p>Learn about the different academic and administrative units in our institution</p>
      </header>

      <section className="units">
        <h2>Our Units</h2>
        <ul className="units-list">
          <li className="units-item">
            <Link to="/units/registrar">
              <AiOutlineArrowRight className="arrow-icon" />
              <span>Registrar Unit</span>
            </Link>
          </li>
          <li className="units-item">
            <Link to="/units/ict">
              <AiOutlineArrowRight className="arrow-icon" />
              <span>I.C.T Unit</span>
            </Link>
          </li>
          <li className="units-item">
            <Link to="/units/bursary">
              <AiOutlineArrowRight className="arrow-icon" />
              <span>Bursary Unit</span>
            </Link>
          </li>
          <li className="units-item">
            <Link to="/units/sports">
              <AiOutlineArrowRight className="arrow-icon" />
              <span>Sports Unit</span>
            </Link>
          </li>
        </ul>
      </section>

      {/* Outlet for rendering sub-routes */}
      <Outlet />
    </div>
  );
};

export default Units;