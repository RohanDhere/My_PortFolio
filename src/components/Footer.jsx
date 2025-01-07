import React from 'react';

function Footer() {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 py-4 bg-gray-800 text-white flex justify-between items-center'>
      <p className='text-sm'>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </div>
  );
}

export default Footer;