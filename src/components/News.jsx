import React from "react";
import './News.css';

// Importing images from the assets folder inside the src directory
import researchFacilityImg from '../assets/image2.jpg';
import engineeringCompetitionImg from '../assets/news.jpg';
import scholarshipOpportunityImg from '../assets/news2.jpg';
import alumniReunionImg from '../assets/news3.jpg';

const News = () => {
    const newsItems = [
        {
            title: "University Launches New Research Facility",
            description: "The university is excited to announce the opening of a state-of-the-art research facility, aimed at advancing innovation in STEM fields. The facility will provide students and faculty with cutting-edge tools for groundbreaking research in various disciplines.",
            date: "February 5, 2024",
            image: researchFacilityImg,  // Using imported image
            link: "/news/research-facility-opening"
        },
        {
            title: "Student Success: Engineering Students Win National Competition",
            description: "A team of engineering students from the university has won first place at the National Robotics Competition. This achievement highlights the university's commitment to fostering innovation and providing hands-on learning opportunities for its students.",
            date: "January 25, 2024",
            image: engineeringCompetitionImg,  // Using imported image
            link: "/news/engineering-competition"
        },
        {
            title: "New Scholarship Opportunities for International Students",
            description: "The university has launched new scholarship programs for international students, aiming to support global talent and encourage diversity within the university community. Apply now for the upcoming academic year.",
            date: "January 15, 2024",
            image: scholarshipOpportunityImg,  // Using imported image
            link: "/news/international-scholarships"
        },
        {
            title: "Alumni Reunion Event Scheduled for Spring 2025",
            description: "The university is hosting an alumni reunion event in the spring, inviting former students to reconnect, network, and celebrate their achievements. This event will be a great opportunity for alumni to revisit the campus and share their experiences.",
            date: "January 10, 2024",
            image: alumniReunionImg,  // Using imported image
            link: "/news/alumni-reunion"
        }
    ];

    return (
        <div>
            <h1>Latest News & Updates</h1>
            <p>Stay informed with the latest updates, announcements, and events from the university.</p>

            <div className="news-list">
                {newsItems.map((item, index) => (
                    <div key={index} className="news-item">
                        <h2>{item.title}</h2>
                        <p><strong>Date:</strong> {item.date}</p>
                        <img src={item.image} alt={item.title} width={300} height={200} />
                        <p>{item.description}</p>
                        <a href={item.link}>Read more...</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
