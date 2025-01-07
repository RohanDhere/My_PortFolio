import React from 'react';

const projects = [
  {
    name: 'IntelliCheck: Submission Integrity Assurance',
    techUsed: 'HTML | CSS | JS | Firebase(Cloud & RTDB) | Python(Flask)',
    image: '/Plagarism.jpg', 
    description: 'IntelliCheck: Submission Integrity Assurance is a system designed to uphold academic integrity by detecting plagiarism in student assignments. As e-learning grows, ensuring originality in student work becomes challenging. IntelliCheck addresses this by analyzing student submissions from various educational platforms, using advanced algorithms and language understanding techniques. Developed primarily in Python, it\'s user-friendly for educators. IntelliCheck not only identifies copied work but also provides insights into the originality and quality of the submissions, aiding teachers in ensuring students\' work is authentic and of high standard. In essence, IntelliCheck is a valuable tool in promoting honesty in digital education.',
    githubLink: 'https://github.com/RohanDhere',
  },
  {
    name: 'Attendance Management System Using MAC Address',
    techUsed: 'Android | JAVA | Wi-Fi | MAC | Firebase',
    image: '/Attendance.avif', 
    description: 'Student Attendance Management System is an innovative Android application designed to simplify and expedite the process of taking student attendance. By leveraging Wi-Fi and hotspot technology to fetch and match student MAC addresses with the database, it ensures fast and accurate attendance marking.',
    githubLink: 'https://github.com/RohanDhere', 
  },
  {
    name: 'Shopseeker: Product Comparison',
    techUsed: 'HTML | CSS | JS | Firebase | Python(Scrapy)',
    image: '/Webscrapping.jpg',
    description: 'Web Scraping for Product Comparison is a user-friendly website designed to facilitate smart shopping decisions. By taking a product name as input, it fetches and compares prices from major online platforms like Flipkart and Amazon, providing users with a comprehensive price comparison, product details, and direct purchase links. This project aims to help users find the best deals and save time on their online shopping journeys.',
    githubLink: 'https://github.com/RohanDhere', 
  },
];

function Projects() {
  return (
    <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>
      <h1 className='text-3xl font-bold text-center text-blue-500 mb-8'>Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projects.map((project, index) => (
          <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden flex flex-col'>
            <img src={project.image} alt={project.name} className='w-full h-48 object-cover' />
            <div className='p-6 flex flex-col flex-grow'>
              <h2 className='text-2xl font-semibold text-blue-500 mb-2'>{project.name}</h2>
              <p className='text-md text-gray-700 mb-2'><strong>Tech Used:</strong> {project.techUsed}</p>
              <p className='text-md text-gray-700 mb-4 text-justify flex-grow'>{project.description}</p>
              <div className='mt-auto'>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200'
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;