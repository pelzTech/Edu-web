import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import {
    FaAngleRight, FaArrowRight, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaGoogle,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "all" });
    const [feedbackStatus, setFeedbackStatus] = useState(null);
    const [showFaq, setShowFaq] = useState(false); // Added this line for FAQ toggle

    const onSubmit = (data) => {
        // Simulate form submission
        console.log("User feedback:", data);
        setFeedbackStatus('Thank you for your feedback! We value your input.');
        setTimeout(() => setFeedbackStatus(null), 5000); // Reset after 5 seconds
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* About Section */}
                <div className="col about-col">
                    <h2>About Us</h2>
                    <p>We are committed to providing world-class education, fostering innovation, and preparing students for global excellence</p>
                </div>

                {/* Quick Links */}
                <div className="col links-col">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><FaAngleRight className="icon" /> <NavLink to="/admission">Admissions</NavLink></li>
                        <li><FaAngleRight className="icon" /> <NavLink to="/academics">Academics</NavLink></li>
                        <li><FaAngleRight className="icon" /> <NavLink to="/research">Research</NavLink></li>
                        <li><FaAngleRight className="icon" /> <NavLink to="/alumni">Alumni</NavLink></li>
                        <li><FaAngleRight className="icon" /> <NavLink to="/careers">Careers</NavLink></li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="col faq-col">
                    <button className="faq-toggle" onClick={() => setShowFaq(!showFaq)}>
                        {showFaq ? "Hide" : "Show"} FAQ
                    </button>
                    {showFaq && (
                        <ul>
                            <li><FaAngleRight className="icon" /> <NavLink to="/faq#admission">Admission Process</NavLink></li>
                            <li><FaAngleRight className="icon" /> <NavLink to="/faq#fees">Tuition Fees</NavLink></li>
                            <li><FaAngleRight className="icon" /> <NavLink to="/faq#scholarships">Scholarships</NavLink></li>
                            <li><FaAngleRight className="icon" /> <NavLink to="/faq#support">Student Support</NavLink></li>
                        </ul>
                    )}
                </div>

                {/* User Feedback Form */}
                <div className="col feedback-col">
                    <h2>We Value Your Feedback</h2>
                    <p>Let us know your thoughts or suggestions!</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="feedback-form">
                        <input 
                            type="text" 
                            placeholder='Your Name' 
                            {...register("name", { required: "Name is required" })}
                        />
                        <input 
                            type="email" 
                            placeholder='Your Email' 
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Email must be valid"
                                }
                            })}
                        />
                        <textarea
                            placeholder='Your Message'
                            {...register("message", { required: "Message is required" })}
                        ></textarea>
                        <button type="submit" className=''><FaArrowRight /></button>
                    </form>
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                    {errors.message && <p className="error-message">{errors.message.message}</p>}
                    {feedbackStatus && <p className="feedback-status">{feedbackStatus}</p>}
                </div>

                {/* Social Media Section */}
                <div className="col social-col">
                    <div className="social-icons">
                        <NavLink to='https://www.facebook.com/'><FaFacebook /></NavLink>
                        <NavLink to='https://www.youtube.com/'><FaYoutube /></NavLink>
                        <NavLink to='https://www.instagram.com/'><FaInstagram /></NavLink>
                        <NavLink to='https://x.com/pelumi09778314?s=21'><FaTwitter /></NavLink>
                        <NavLink to='https://www.linkedin.com/in/ridwan-olugbeja-716127317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><FaLinkedin /></NavLink>
                        <NavLink to='mailto:pelzcode66@gmail.com'><FaGoogle /></NavLink>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 pelzcode. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
