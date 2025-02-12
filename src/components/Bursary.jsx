import React from "react";
import './Bursary.css';

// Importing images
import bursarImage from '../assets/prof4.jpg';
import assistantBursarImage from '../assets/prof.jpg';
import payrollOfficerImage from '../assets/prof2.jpg';
import bursaryAdminImage from '../assets/prof3.jpg';

const Bursary = () => {
    const bursaryRoles = [
        {
            name: "Bursar",
            role: "The Bursar is responsible for overseeing the financial operations of the university, ensuring sound financial management and compliance with relevant regulations.",
            responsibilities: [
                "Overseeing the financial health of the university.",
                "Ensuring compliance with government regulations and financial policies.",
                "Supervising all financial transactions, including tuition fees, salaries, and other expenses.",
                "Reporting financial status to the university board and stakeholders."
            ],
            contact: {
                email: "bursar@EminenceUniversity.edu",
                phone: "(123) 456-7890"
            },
            image: bursarImage
        },
        {
            name: "Assistant Bursar (Accounts and Finance)",
            role: "The Assistant Bursar handles the day-to-day financial operations, including accounts receivable, payments, and budgeting.",
            responsibilities: [
                "Managing accounts payable and receivable.",
                "Preparing and maintaining the university's financial statements.",
                "Assisting with the development of the university's annual budget.",
                "Ensuring accurate and timely processing of financial transactions."
            ],
            contact: {
                email: "assistantbursar@EminenceUniversity.edu",
                phone: "(123) 555-6789"
            },
            image: assistantBursarImage
        },
        {
            name: "Payroll Officer",
            role: "The Payroll Officer is responsible for managing payroll processes, ensuring accurate and timely payments to staff and faculty.",
            responsibilities: [
                "Processing payroll for university employees.",
                "Ensuring tax compliance and other deductions are accurate.",
                "Maintaining confidential employee salary information.",
                "Providing assistance with payroll-related inquiries."
            ],
            contact: {
                email: "payroll@EminenceUniversity.edu",
                phone: "(123) 555-2345"
            },
            image: payrollOfficerImage
        },
        {
            name: "Bursary Administrator",
            role: "The Bursary Administrator assists with various administrative tasks, including tuition fee processing and handling student billing inquiries.",
            responsibilities: [
                "Processing tuition fees and other student payments.",
                "Handling student billing inquiries and providing support.",
                "Maintaining financial records for students and staff.",
                "Assisting with financial audits and reporting."
            ],
            contact: {
                email: "bursaryadmin@EminenceUniversity.edu",
                phone: "(123) 555-4321"
            },
            image: bursaryAdminImage
        }
    ];

    return (
        <div>
            <h1>Bursary Unit</h1>
            <p>The Bursary Unit handles financial transactions, budgeting, payroll management, and the overall financial health of the university.</p>

            <h2>Functions of the Bursary Unit</h2>
            <ul>
                <li>Managing and processing tuition fees for students.</li>
                <li>Ensuring timely and accurate payment of staff salaries and wages.</li>
                <li>Overseeing the university’s financial transactions and record-keeping.</li>
                <li>Preparing financial reports and budgets for university departments.</li>
                <li>Coordinating audits and ensuring compliance with financial regulations and policies.</li>
                <li>Assisting students with fee payments and addressing billing concerns.</li>
            </ul>

            <h2>Bursary Unit Management</h2>
            {bursaryRoles.map((person, index) => (
                <div key={index} className="management-role">
                    <h3>{person.name}</h3>
                    <img src={person.image} alt={person.name} width={150} height={150} />
                    <p><strong></strong> {person.role}</p>
                    <p><strong>Responsibilities:</strong></p>
                    <ul>
                        {person.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                        ))}
                    </ul>
                    <p><strong>Contact:</strong></p>
                    <ul>
                        <li><strong>Email:</strong> <a href={`mailto:${person.contact.email}`}>{person.contact.email}</a></li>
                        <li><strong>Phone:</strong> <a href={`tel:${person.contact.phone}`}>{person.contact.phone}</a></li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Bursary;
