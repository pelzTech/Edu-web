import React from "react";
import './Ict.css';

const Ict = () => {
    const ictRoles = [
        {
            name: "ICT Director",
            role: "The ICT Director oversees the entire ICT department, ensuring the university's technological infrastructure is operational and up-to-date.",
            responsibilities: [
                "Strategic planning and management of ICT resources.",
                "Coordination of technology-related projects and systems integration.",
                "Ensuring the security and integrity of university data."
            ],
            contact: {
                email: "ictdirector@university.edu",
                phone: "(123) 456-7890"
            },
           
        },
        {
            name: "Network Administrator",
            role: "The Network Administrator manages the university’s network systems, ensuring a stable, secure, and efficient network infrastructure.",
            responsibilities: [
                "Installation and maintenance of network hardware.",
                "Monitoring network performance and resolving connectivity issues.",
                "Managing network security protocols."
            ],
            contact: {
                email: "networkadmin@university.edu",
                phone: "(123) 555-6789"
            },
           
        },
        {
            name: "Systems Analyst",
            role: "The Systems Analyst works to improve university IT systems, analyzing, designing, and maintaining technological solutions for academic and administrative needs.",
            responsibilities: [
                "Assessment and optimization of university software systems.",
                "Collaboration with departments to identify IT needs and solutions.",
                "Implementation of software updates and upgrades."
            ],
            contact: {
                email: "sysanalyst@EminenceUniversity.edu",
                phone: "(123) 555-2345"
            },
           
        },
        {
            name: "Technical Support Specialist",
            role: "The Technical Support Specialist provides IT support and troubleshooting for staff, faculty, and students, resolving technical issues related to hardware and software.",
            responsibilities: [
                "Providing support to end-users for hardware and software issues.",
                "Setting up and configuring computer systems and devices.",
                "Training staff and students on new technology tools."
            ],
            contact: {
                email: "techsupport@EminenceUniversity.edu",
                phone: "(123) 555-9876"
            },
            
        }
    ];

    return (
        <div>
            <h1>ICT Unit</h1>
            <p>The ICT Unit manages the university’s technology infrastructure and digital services,<br/> supporting the academic and administrative functions through the use of modern technology solutions.</p>

            <h2>Functions of the ICT Unit</h2>
            <ul>
                <li>Providing and maintaining university-wide internet access and network connectivity.</li>
                <li>Supporting online learning platforms, ensuring that faculty and students can access educational tools and resources.</li>
                <li>Managing software solutions for academic departments, including course management and grading systems.</li>
                <li>Ensuring the cybersecurity of university data, protecting both academic records and personal information.</li>
                <li>Providing IT support and training for faculty, staff, and students.</li>
                <li>Research and development of new technologies to improve university operations and academic services.</li>
            </ul>

            <h2>ICT Unit Management</h2>
            {ictRoles.map((person, index) => (
                <div key={index} className="management-role">
                    <h3>{person.name}</h3>
                   
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

export default Ict;
