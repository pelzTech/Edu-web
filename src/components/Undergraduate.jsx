import React from "react";
import './Undergraduate.css'; 

const Undergraduate = () => {
    const courses = [
        {
            name: "Computer Science",
            fees: "$10,000 per year",
            requirements: [
                "High School Diploma or equivalent",
                "Mathematics (A-levels or equivalent)",
                "Pass the university entrance exam"
            ]
        },
        {
            name: "Business Administration",
            fees: "$8,500 per year",
            requirements: [
                "High School Diploma or equivalent",
                "English proficiency",
                "Pass the university entrance exam"
            ]
        },
        {
            name: "Engineering",
            fees: "$12,000 per year",
            requirements: [
                "High School Diploma or equivalent",
                "Advanced Mathematics and Physics",
                "Pass the university entrance exam"
            ]
        },
        {
            name: "Psychology",
            fees: "$9,500 per year",
            requirements: [
                "High School Diploma or equivalent",
                "English proficiency",
                "Pass the university entrance exam"
            ]
        }
    ];

    const registrarContact = {
        name: "Dr. Kunle Smith",
        email: "registrar@EminenceUniversity.edu",
        phone: "(807) 530--6443"
    };

    return (
        <div className="undergraduate-page">
            <header className="page-header">
                <h1>Undergraduate Admission</h1>
                <p>Explore the undergraduate programs, entry requirements, and application process</p>
            </header>
            
            <section className="courses-section">
                <h2>Available Courses</h2>
                <ul className="courses-list">
                    {courses.map((course, index) => (
                        <li key={index} className="course-item">
                            <h3>{course.name}</h3>
                            <p><strong>Annual School Fees:</strong> {course.fees}</p>
                            <h4>Requirements:</h4>
                            <ul>
                                {course.requirements.map((req, i) => (
                                    <li key={i}>{req}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="contact-section">
                <h2>Contact Information</h2>
                <p>If you have any questions or need more information, feel free to contact the registrar:</p>
                <p><strong>Name:</strong> {registrarContact.name}</p>
                <p><strong>Email:</strong> <a href={`mailto:${registrarContact.email}`}>{registrarContact.email}</a></p>
                <p><strong>Phone:</strong> <a href={`tel:${registrarContact.phone}`}>{registrarContact.phone}</a></p>
            </section>
        </div>
    );
};

export default Undergraduate;
