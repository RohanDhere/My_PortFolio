import React from 'react';

function Contact() {
  return (
      <div name='Contact'
          className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28'>
      <h1 className='text-3xl font-bold text-center text-blue-500 mb-8'>Contact</h1>
      <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
        <p className='text-lg text-gray-700 mb-4'>
          Mobile Number: <a href='tel:+918806427374' className='text-blue-500 hover:underline'>+91 8806427374</a>
        </p>
        <p className='text-lg text-gray-700'>
          Email ID: <a href='mailto:rohandhere44@gmail.com' className='text-blue-500 hover:underline'>rohandhere44@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;