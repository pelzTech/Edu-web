import React from "react";
import './Registrar.css';

// Import images
import profImage from '../assets/prof.jpg';
import deputyRegistrarImage from '../assets/prof.jpg';
import registrarAdminImage from '../assets/prof2.jpg';
import assistantRegistrarImage from '../assets/prof3.jpg';
import admissionOfficeImage from '../assets/prof4.jpg';

const Registrar = () => {
    const registrarUnit = [
        {
            name: "Registrar",
            role: "The Registrar oversees the academic records, admissions, and all administrative processes related to student enrollment.",
            contact: {
                email: "registrar@EminenceUniversity.edu",
                phone: "(123) 456-7890"
            },
            image: profImage
        },
        {
            name: "Deputy Registrar (Academic Planning)",
            role: "The Deputy Registrar (Academic Planning) handles academic schedules, curriculum development, and course planning across departments.",
            contact: {
                email: "deputyregistrar@EminenceUniversity.edu",
                phone: "(123) 555-6789"
            },
            image: deputyRegistrarImage
        },
        {
            name: "Registrar Administrator",
            role: "The Registrar Administrator manages the operational activities, student records, and supports the registrar in administrative tasks.",
            contact: {
                email: "registraradmin@EminenceUniversity.edu",
                phone: "(123) 555-1234"
            },
            image: registrarAdminImage
        },
        {
            name: "Assistant Registrar",
            role: "The Assistant Registrar assists with processing student records, admissions, and supports the Registrar in managing day-to-day tasks.",
            contact: {
                email: "assistantregistrar@EminenceUniversity.edu",
                phone: "(123) 555-4321"
            },
            image: assistantRegistrarImage
        },
        {
            name: "Admission Office",
            role: "The Admission Office is responsible for processing applications, managing admissions tests, and offering support to prospective students.",
            contact: {
                email: "admissions@EminenceUniversity.edu",
                phone: "(123) 555-6789"
            },
            image: admissionOfficeImage
        }
    ];

    return (
        <div>
            <h1>Registrar Unit</h1>
            <p>The Registrar Unit oversees the administration and academic records of the university.</p>
            
            <h2>Registrar Unit Management</h2>
            {registrarUnit.map((person, index) => (
                <div key={index} className="management-role">
                    <h3>{person.name}</h3>
                    <img src={person.image} alt={person.name} width={150} height={150} />
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

export default Registrar;
