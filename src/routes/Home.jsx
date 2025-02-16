import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';


import proChancellorImg from '../assets/prof.jpg';
import viceChancellorImg from '../assets/prof2.jpg';
import registrarImg from '../assets/prof3.jpg';
import bursarImg from '../assets/prof4.jpg';
import librarianImg from '../assets/prof5.jpg';
import sliderImg1 from '../assets/uni3.jpg';
import sliderImg2 from '../assets/stud.jpg';
import sliderImg3 from '../assets/stud2.jpg';
import sliderImg4 from '../assets/uni4.jpg';

const Home = () => {
    const [showBio, setShowBio] = useState({
        "ProChancellor": false,
        "ViceChancellor": false,
        "Registrar": false,
        "Bursar": false,
        "Librarian": false
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          
        autoplaySpeed: 10000,    
    };

    const toggleBio = (role) => {
        setShowBio(prevState => ({
            ...prevState,
            [role]: !prevState[role]
        }));
    };

    return (
        <div className="home-container">
            <h1>Welcome to Eminence University</h1>
            <p>
                Our University is a place where knowledge meets opportunity. We provide world-class education across various fields, 
                preparing students to become leaders, thinkers, and innovators. Join us in shaping the future with cutting-edge programs 
                and research opportunities
            </p>

            {/* Image Slider */}
            <Slider {...settings}>
                <div>
                    <img src={sliderImg1} alt="Campus View 1" className="slider-img" />
                </div>
                <div>
                    <img src={sliderImg2} alt="Campus View 2" className="slider-img" />
                </div>
                <div>
                    <img src={sliderImg3} alt="Campus View 3" className="slider-img" />
                </div>
                <div>
                    <img src={sliderImg4} alt="Campus View 4" className="slider-img" />
                </div>
            </Slider>

            <h2>About Our University</h2>
            <p>
                Founded in 1990, our university has grown into a prestigious institution offering diverse programs across various fields. 
                With a rich history, we focus on fostering academic excellence, social responsibility, and leadership skills among our students.
            </p>
            
            {/* Profile Section */}
            <h2>University Management</h2>
            <p>
                Our leadership team is committed to guiding the university towards excellence in education, research, and student development. 
                Here’s a brief introduction to our distinguished management team:
            </p>

            <div className="profile-cards">
               
                <div className="profile-card">
                    <img src={proChancellorImg} alt="Pro-Chancellor" className="profile-img" />
                    <h4>Prof. Michael Adams</h4>
                    <p>Pro-Chancellor</p>
                    <button onClick={() => toggleBio("ProChancellor")} className="bio-button">
                        {showBio.ProChancellor ? "View Less" : "View More"}
                        {showBio.ProChancellor ? <FaArrowUp className="bio-icon" /> : <FaArrowDown className="bio-icon" />}
                    </button>
                    {showBio.ProChancellor && (
                        <p className="bio-text">
                            Prof. Michael Adams has been a guiding force in the university’s strategic direction for over 15 years. He brings extensive 
                            experience in higher education management and has been instrumental in expanding the university’s global partnerships.
                        </p>
                    )}
                </div>

                {/* Vice-Chancellor */}
                <div className="profile-card">
                    <img src={viceChancellorImg} alt="Vice-Chancellor" className="profile-img" />
                    <h4>Prof. Angela John</h4>
                    <p>Vice Chancellor</p>
                    <button onClick={() => toggleBio("ViceChancellor")} className="bio-button">
                        {showBio.ViceChancellor ? "View Less" : "View More"}
                        {showBio.ViceChancellor ? <FaArrowUp className="bio-icon" /> : <FaArrowDown className="bio-icon" />}
                    </button>
                    {showBio.ViceChancellor && (
                        <p className="bio-text">
                            Prof. Angela John has led the university in academic advancement and innovation. With a background in research and administration, 
                            she has contributed significantly to curriculum development and student success programs.
                        </p>
                    )}
                </div>

               
                <div className="profile-card">
                    <img src={registrarImg} alt="Registrar" className="profile-img" />
                    <h4>Dr. Ojo Smith</h4>
                    <p>Registrar</p>
                    <button onClick={() => toggleBio("Registrar")} className="bio-button">
                        {showBio.Registrar ? "View Less" : "View More"}
                        {showBio.Registrar ? <FaArrowUp className="bio-icon" /> : <FaArrowDown className="bio-icon" />}
                    </button>
                    {showBio.Registrar && (
                        <p className="bio-text">
                            Dr. Ojo Smith has been the Registrar for over 10 years, overseeing academic records and admissions. She is dedicated to streamlining 
                            university processes and ensuring an excellent experience for students and faculty alike.
                        </p>
                    )}
                </div>

               
                <div className="profile-card">
                    <img src={bursarImg} alt="Bursar" className="profile-img" />
                    <h4>Mr. David Green</h4>
                    <p>Bursar</p>
                    <button onClick={() => toggleBio("Bursar")} className="bio-button">
                        {showBio.Bursar ? "View Less" : "View More"}
                        {showBio.Bursar ? <FaArrowUp className="bio-icon" /> : <FaArrowDown className="bio-icon" />}
                    </button>
                    {showBio.Bursar && (
                        <p className="bio-text">
                            Mr. David Green is responsible for managing the university's financial operations. His focus on financial transparency and 
                            student financial services ensures a smooth and efficient process for all.
                        </p>
                    )}
                </div>

                <div className="profile-card">
                    <img src={librarianImg} alt="Librarian" className="profile-img" />
                    <h4>Dr. Susan Clark</h4>
                    <p>Librarian</p>
                    <button onClick={() => toggleBio("Librarian")} className="bio-button">
                        {showBio.Librarian ? "View Less" : "View More"}
                        {showBio.Librarian ? <FaArrowUp className="bio-icon" /> : <FaArrowDown className="bio-icon" />}
                    </button>
                    {showBio.Librarian && (
                        <p className="bio-text">
                            Dr. Susan Clark is the head of the university library, with a commitment to providing cutting-edge resources and support 
                            for students and faculty to enhance learning and research activities.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
