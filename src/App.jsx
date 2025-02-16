import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Colleges from "./components/Colleges";
import Admission from "./routes/Admission";
import Units from "./components/Units";
import News from "./components/News";
import About from "./routes/About";
import Portals from "./components/Portals";


import Postgraduate from "./components/Postgraduate";
import Undergraduate from "./components/Undergraduate";

import Registrar from "./components/Registrar";
import Ict from "./components/Ict";
import Bursary from "./components/Bursary";
import Sports from "./components/Sports";

// Colleges sub-pages
import CollegeArt from "./components/CollegeArt";
import CollegeManagement from "./components/CollegeManagement";
import CollegeMedical from "./components/CollegeMedical";
import CollegeLaw from "./components/CollegeLaw";
import CollegeEducation from "./components/CollegeEducation";


import Navbar from "./components/Navbar"; 


import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
       
        <Navbar /> 

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/colleges" element={<Colleges />}>
            <Route index element={<CollegeArt />} />
            <Route path="arts" element={<CollegeArt />} />
            <Route path="management" element={<CollegeManagement />} />
            <Route path="medical" element={<CollegeMedical />} />
            <Route path="law" element={<CollegeLaw />} />
            <Route path="education" element={<CollegeEducation />} />
          </Route>

         
          <Route path="/admission" element={<Admission />}>
            <Route path="postgraduate" element={<Postgraduate />} />
            <Route path="undergraduate" element={<Undergraduate />} />
          </Route>

          <Route path="/units" element={<Units />}>
            <Route index element={<Registrar />} /> 
            <Route path="registrar" element={<Registrar />} />
            <Route path="ict" element={<Ict />} />
            <Route path="bursary" element={<Bursary />} />
            <Route path="sports" element={<Sports />} />
          </Route>

          <Route path="/news" element={<News />} />
          <Route path="/portals" element={<Portals />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

       
        <Footer />
      </div>
    </Router>
  );
};

export default App;
