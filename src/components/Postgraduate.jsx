import React from "react";

const Postgraduate = () => {
    const courses = [
        {
            name: "Master of Computer Science",
            fees: "$15,000 per year",
            requirements: [
                "Bachelor's degree in Computer Science or related field",
                "Minimum GPA of 3.0",
                "English proficiency (TOEFL/IELTS)",
                "Statement of Purpose",
                "Recommendation Letters"
            ]
        },
        {
            name: "Master of Business Administration (MBA)",
            fees: "$18,000 per year",
            requirements: [
                "Bachelor's degree in any discipline",
                "At least 2 years of professional work experience",
                "GMAT/GRE score (optional)",
                "English proficiency (TOEFL/IELTS)",
                "Statement of Purpose"
            ]
        },
        {
            name: "PhD in Engineering",
            fees: "$20,000 per year",
            requirements: [
                "Master's degree in Engineering or related field",
                "Research proposal",
                "Minimum GPA of 3.5",
                "English proficiency (TOEFL/IELTS)",
                "Recommendation Letters"
            ]
        },
        {
            name: "PhD in Psychology",
            fees: "$18,500 per year",
            requirements: [
                "Master's degree in Psychology or related field",
                "Research proposal",
                "Minimum GPA of 3.5",
                "English proficiency (TOEFL/IELTS)",
                "Recommendation Letters"
            ]
        }
    ];

    const registrarContact = {
        name: "Mrs. Janet Doe",
        email: "postgrad.registrar@EminenceUniversity.edu",
        phone: "(123) 987-6543"
    };

    return (
        <div>
            <h1>Postgraduate Admission</h1>
            <p>Find out about master's and PhD programs, eligibility criteria, and application procedures</p>
            
            <h2>Available Courses</h2>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>
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

            <h2>Contact Information</h2>
            <p>If you have any questions or need more information, feel free to contact the postgraduate registrar:</p>
            <p><strong>Name:</strong> {registrarContact.name}</p>
            <p><strong>Email:</strong> <a href={`mailto:${registrarContact.email}`}>{registrarContact.email}</a></p>
            <p><strong>Phone:</strong> <a href={`tel:${registrarContact.phone}`}>{registrarContact.phone}</a></p>
        </div>
    );
};

export default Postgraduate;
