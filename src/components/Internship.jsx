import React from 'react';

const internships = [
  {
    company: 'Softron Technology, Kolhapur',
    role: 'Web Development Intern',
    duration: 'January 2025 – May 2025',
    description: `
      - Developed MessWala, a web-based mess management system to automate meal booking, user subscriptions, admin controls, and refund calculations.
      
      - Worked on frontend technologies (HTML, CSS, JavaScript, Bootstrap) and backend (PHP, MySQL with PDO).
      
      - Implemented features like secure user sessions, role-based access, real-time meal tracking, and refund logic for monthly members.
      
      - Gained practical experience in full-stack web development, modular coding, debugging, and deploying real-world solutions.
    `,
  },
];

function Internship() {
  return (
    <div name="Internship" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">Internship Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {internships.map((internship, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">{internship.company}</h2>
            <p className="text-md text-gray-700 mb-1"><strong>Role:</strong> {internship.role}</p>
            <p className="text-md text-gray-700 mb-1"><strong>Duration:</strong> {internship.duration}</p>
            <p className="text-md text-gray-700 text-justify whitespace-pre-line">{internship.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internship;