import React from 'react';

const skills = {
  programmingLanguages: [
    { name: 'C', image: '/logo/C.png' },
    { name: 'C++', image: '/logo/CPP.png' },
    { name: 'Core Java', image: '/logo/Java.png' },
    { name: 'Python', image: '/logo/Python.png' },
    { name: 'JavaScript', image: '/logo/Javascript.png' },
    { name: 'SQL', image: '/logo/SQL.avif' },
  ],
  databases: [
    { name: 'MySQL', image: '/logo/MySql.png' },
    { name: 'Firebase', image: '/logo/Firebase.png' },
    { name: 'MongoDB', image: '/logo/MongoDB.png' },
  ],
  otherTools: [
    { name: 'HTML', image: '/logo/HTML.png' },
    { name: 'CSS', image: '/logo/CSS.png' },
    { name: 'ReactJS', image: '/logo/ReactJS.png' },
    { name: 'NodeJS', image: '/logo/NodeJS.png' },
    { name: 'Git', image: '/logo/Git.png' },
    { name: 'Github', image: '/logo/Github.png' },
    { name: 'Android Studio', image: '/logo/Android.png' },
    { name: 'Flutter', image: '/logo/Flutter.png' },
    { name: 'WordPress', image: '/logo/Wordpress.png' },
  ],
};

function Skills() {
  return (
    <div name="Skills" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>
      <h1 className='text-3xl font-bold text-center text-blue-500 mb-8'>Skills</h1>
      
      <div className='mb-12'>
        <h2 className='text-2xl font-semibold text-blue-500 mb-4'>Programming Languages</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {skills.programmingLanguages.map((skill, index) => (
            <div key={index} className='bg-white shadow-lg rounded-lg p-4 text-center'>
              <img src={skill.image} alt={skill.name} className='w-12 h-12 mx-auto mb-2' />
              <h3 className='text-lg font-semibold text-gray-700'>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-12'>
        <h2 className='text-2xl font-semibold text-blue-500 mb-4'>Databases</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {skills.databases.map((skill, index) => (
            <div key={index} className='bg-white shadow-lg rounded-lg p-4 text-center'>
              <img src={skill.image} alt={skill.name} className='w-12 h-12 mx-auto mb-2' />
              <h3 className='text-lg font-semibold text-gray-700'>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className='text-2xl font-semibold text-blue-500 mb-4'>Other Tools and Technologies</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {skills.otherTools.map((skill, index) => (
            <div key={index} className='bg-white shadow-lg rounded-lg p-4 text-center'>
              <img src={skill.image} alt={skill.name} className='w-12 h-12 mx-auto mb-2' />
              <h3 className='text-lg font-semibold text-gray-700'>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;