import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar />
            <Home />
            <Education />
            <Skills />
            <Internship />
            <Projects />
            <Contact />
            <Footer />
            {showButton && (
                <Link
                    to="Home"
                    smooth={true}
                    duration={500}
                    className='fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-700 transition duration-200 cursor-pointer'
                >
                    <FaArrowUp />
                </Link>
            )}
        </>
    );
}

export default App;