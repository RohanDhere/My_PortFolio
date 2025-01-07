import React from 'react';

function Education() {
  const educationDetails = [
    {
      degree: 'B.Tech',
      college: "KIT's College of Engineering Kolhapur",
      passingYear: 'July 2025',
      grade: 'CGPA : 7.8',
    },
    {
      degree: 'Diploma in Computer Engg.',
      college: 'Government Polytechnic, Miraj',
      passingYear: 'June 2022',
      grade: 'Percentage : 93.43%',
    },
    {
      degree: 'S.S.C',
      school: 'Madhyamik Vidyalay Darwad',
      passingYear: 'March 2019',
      grade: 'Percentage : 86.60%',
    },
  ];

  return (
    <div name="Education" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>
      <h1 className='text-3xl font-bold text-center text-blue-500 mb-8'>Education</h1>
      <div className='space-y-8'>
        {educationDetails.map((education, index) => (
          <div key={index} className='bg-white shadow-lg rounded-lg p-6'>
            <h2 className='text-2xl font-semibold text-blue-500'>{education.degree}</h2>
            <p className='text-lg text-gray-700'>{education.college || education.school}</p>
            <p className='text-md text-gray-500'>Passing Year: {education.passingYear}</p>
            <p className='text-md text-gray-500'>{education.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;