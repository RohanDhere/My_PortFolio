import React, { useContext } from 'react';
import pic from '../../public/rohan.jpg';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose, AiOutlineSun, AiOutlineMoon } from "react-icons/ai";
import { Link } from 'react-scroll';
import { useDarkMode } from '../context/DarkModeContext';

function Navbar() {
    const [menu, setMenu] = React.useState(false);
    const { darkMode, toggleDarkMode } = useDarkMode();

    const navItems = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Education' },
        { id: 3, name: 'Skills' },
        { id: 4, name: 'Projects' },
        { id: 5, name: 'Contact' }
    ];

    return (
        <div className='max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900'>
            <div className='flex justify-between h-16 items-center'>
                <div className='flex space-x-2'>
                    <img src={pic} className="h-15 w-14 rounded-full" alt="" />
                    <h1 className='font-semibold text-xl cursor-pointer'>
                        <span className='text-blue-500 text-2xl'>R</span>ohan
                        <p className='text-sm'>Programmer</p>
                    </h1>
                </div>
                <ul className='hidden md:flex space-x-8'>
                    {navItems.map((item) => (
                        <li key={item.id} className='hover:shadow-lg hover:shadow-blue-500 cursor-pointer'>
                            <Link
                                to={item.name}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                            >{item.name}</Link></li>
                    ))}
                </ul>
                <div className='flex items-center space-x-4'>
                    <button
                        onClick={toggleDarkMode}
                        className='bg-primary text-blue p-2 rounded-full'
                    >
                        {darkMode ? <AiOutlineSun size={24} /> : <AiOutlineMoon size={24} />}
                    </button>
                    <div onClick={() => setMenu(!menu)} className='md:hidden ml-auto'>
                        {menu ? <AiOutlineClose /> : <RxHamburgerMenu />}
                    </div>
                </div>
            </div>
            {menu && (
                <div className='md:hidden bg-white dark:bg-gray-900'>
                    <ul className='flex flex-col h-screen items-center justify-center space-y-3 font-semibold'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    onClick={() => setMenu(!menu)}
                                    to={item.name}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                >{item.name}</Link></li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;