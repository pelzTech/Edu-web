import React from "react";
import './Portals.css';

const Portals = () => {
    return (
        <div>
            <h1>Student & Staff Portals</h1>
            <p>Access the portals for both students and staff to manage academic and administrative tasks efficiently</p>

            <h2>Student Portal</h2>
            <p>The Student Portal is a personalized platform that allows students to manage their academic activities, view their grades, register for courses, pay fees, and access essential university resources. Students can also check their class schedules, participate in university forums, and stay updated with the latest university announcements</p>
            
            <h3>Key Features of the Student Portal:</h3>
            <ul>
                <li><strong>Course Registration:</strong> Register for courses each semester and check prerequisites.</li>
                <li><strong>Grade Tracking:</strong> View academic performance and track grades for completed courses.</li>
                <li><strong>Financial Management:</strong> Pay tuition fees, view billing statements, and access scholarship details.</li>
                <li><strong>Student Events:</strong> Stay updated with university events, seminars, and extracurricular activities.</li>
                <li><strong>Communication Hub:</strong> Send and receive messages from professors and university administration.</li>
                <li><strong>Document Access:</strong> Access important academic documents such as transcripts, certificates, and exam schedules.</li>
            </ul>
            
            <h3>Login to the Student Portal:</h3>
            <a href="https://studentportal.university.edu" target="_blank" rel="noopener noreferrer">Click here to log in to the Student Portal</a>
            
            <h2>Staff Portal</h2>
            <p>The Staff Portal is designed for faculty and administrative staff to manage academic records, access teaching materials, manage student performance, and communicate with colleagues and students. It provides staff with the tools necessary for efficient operation within the university's academic environment.</p>
            
            <h3>Key Features of the Staff Portal:</h3>
            <ul>
                <li><strong>Course Management:</strong> Create, update, and manage course content, materials, and schedules.</li>
                <li><strong>Grade Submission:</strong> Enter and manage grades for student assessments.</li>
                <li><strong>Student Communication:</strong> Send notifications, emails, and messages to students regarding assignments and class updates.</li>
                <li><strong>Administrative Functions:</strong> Access HR resources, submit leave requests, and check payroll information.</li>
                <li><strong>Research Resources:</strong> Manage research project data, access university grants, and submit funding requests.</li>
                <li><strong>Professional Development:</strong> Stay updated with internal training programs, workshops, and staff development initiatives.</li>
            </ul>

            <h3>Login to the Staff Portal:</h3>
            <a href="https://staffportal.university.edu" target="_blank" rel="noopener noreferrer">Click here to log in to the Staff Portal</a>

            <h2>Support and Assistance</h2>
            <p>If you encounter any issues or need help navigating the portals, the IT support team is available to assist you. Please use the following contact details:</p>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:itsupport@university.edu">itsupport@university.edu</a></li>
                <li><strong>Phone:</strong> <a href="tel:+1234567890">+234 807 530 6443</a></li>
                <li><strong>Office Hours:</strong> Monday to Friday, 8:00 AM - 5:00 PM</li>
            </ul>

            <h2>Portal Security</h2>
            <p>For your security, the portals are protected with two-factor authentication (2FA). Please ensure that you regularly update your password and follow best practices for secure account management. If you suspect any unauthorized activity on your account, immediately contact the IT support team</p>
        </div>
    );
};

export default Portals;
