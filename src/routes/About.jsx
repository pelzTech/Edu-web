import React from "react";
import './About.css'; 

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p className="intro">
                At Eminence University, we are dedicated to providing quality education and resources for our students. Our commitment to academic excellence helps shape well-rounded individuals prepared for the challenges of the future.
            </p>

            <section className="history-section">
                <h2>Our History</h2>
                <p>
                    Founded in 1990, our university has evolved from a small educational institute into a prestigious institution recognized globally. Over the decades, we have expanded our academic offerings and established partnerships with leading organizations across the world
                </p>
                <p>
                    We have a rich tradition of academic excellence and innovation, which continues to drive our mission today.
                </p>
            </section>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to provide a transformative educational experience that fosters personal growth, social responsibility, and a commitment to lifelong learning. We aim to cultivate an environment where creativity and innovation thrive.
                </p>
            </section>

            <section className="vision-section">
                <h2>Our Vision</h2>
                <p>
                    We envision a world where education empowers individuals and communities to achieve their full potential. Our university aspires to be a leader in research and education, fostering the next generation of professionals who will make significant contributions to society
                </p>
            </section>

            <section className="values-section">
                <h2>Our Values</h2>
                <ul>
                    <li>Integrity</li>
                    <li>Excellence</li>
                    <li>Innovation</li>
                    <li>Diversity and Inclusion</li>
                    <li>Community Engagement</li>
                </ul>
            </section>

            <section className="achievements-section">
                <h2>Key Achievements</h2>
                <ul>
                    <li>Awarded Top 10 University in National Rankings</li>
                    <li>Established over 100 international partnerships</li>
                    <li>Home to award-winning research programs</li>
                    <li>Student satisfaction rating of <span className="number">95%+</span></li>
                </ul>
            </section>
        </div>
    );
};

export default About;