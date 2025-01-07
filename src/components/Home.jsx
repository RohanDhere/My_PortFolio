import React from "react";

import pic from "../../public/rohan.jpg";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-blue-500 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-md md:text-md text-justify">
             Welcome to my portfolio. This platform serves as a showcase of my skills, projects, and accomplishments in the field of Computer Science. It's designed to provide a comprehensive view of my capabilities to potential employers and to assist me in my placement efforts. I invite you to explore my work and connect with me on my professional networks for any opportunities or feedback. I look forward to hearing from you.
            </p>
            <br />                   
{/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/RohanDhere" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/rohan-dhere-58728b242/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ronny_dhere/" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                
                </ul>
            </div>
                          
{/* Resume download button */}
            <div className="space-y-2">
              <div className="flex justify-center">
                <a
                    href="https://drive.google.com/file/d/1USqw4herCDpzyv8OX3C_cx8zTNrRWIU8/view?usp=sharing"
                  download
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 shadow-lg cursor-pointer mt-4"
                >
                My Resume
                </a>
              </div>
                          </div>
                          
{/* Image  */}
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;