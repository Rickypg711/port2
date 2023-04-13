"use client";

import { FaGithub } from "react-icons/fa";

// import clima from "../../../public/Image 3-8-23 at 5.48 PM.jpg";

import Link from "next/link";
import { Montserrat, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Nav from "../components/Nav";

// export default function Header() {

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const playFairDisplay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playFairDisplay",
});

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Nav />
      {/* hamburger */}

      {/* <div className="flex mt-3 items-center">
        <div className="ml-3 mr-7">
          <Link
            href="/"
            className={`${playFairDisplay.className}  text-teal-200 text-xl hover:line-through decoration-violet-200 transition-all`}
          >
            RICARDO PAREDES
          </Link>
        </div>
        <div className="nav-line is-pink"></div>
        <div className="flex-grow h-px bg-violet-200 mx-auto"></div>

        <div className="nav-left-item nav-copyright">
        <div className="nav-left-item nav-links  ml-7 mr-4 text-teal-200 text-xl">
          <button
            className="text-2xl text-teal-200 hover:text-violet-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20`}
          >
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-800 hover:bg-violet-200 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block px-4 py-2 text-gray-800 hover:bg-violet-200 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-gray-800 hover:bg-violet-200 hover:text-white"
            >
              Blog
            </Link>
          </div>
        </div>
        </div>
      </div> */}

      {/* hamburger */}
      {/* <div className="flex mt-3 items-center">
        <div className="ml-3 mr-7">
          <Link
            href="/"
            className={`${playFairDisplay.className}  text-teal-200 text-xl hover:line-through decoration-violet-200 transition-all`}
          >
            RICARDO PAREDES
          </Link>
        </div>
        <div className="nav-line is-pink"></div>
        <div className="flex-grow h-px bg-violet-200 mx-auto"></div>
        <div className="nav-left-item nav-copyright">
          <div className="ml-7 mr-3 text-teal-200 text-xl">©/2023</div>
        </div>
      </div> */}
      {/*  */}
      <div className="my-10 flex flex-wrap md:flex-no-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 m-5">
          <Link
            href="https://clima-rust.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Image
              src={clima}
              alt="Preview of Clima project"
              // object-fill
              className="w-full h-auto rounded-lg shadow-lg object-cover	"
            /> */}
          </Link>
          <div className="flex items-center justify-center mt-5">
            <Link
              href="https://github.com/Rickypg711/clima"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-teal-200 hover:bg-violet-200 text-white font-bold py-2 px-4 rounded-full transition-all flex items-center">
                <FaGithub size={20} className="mr-2" />
                <span>View on GitHub</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 m-5">
          <Link
            href="https://clima-rust.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Image
              src={clima}
              alt="Preview of Clima project"
              // object-fit="fill"
              className="w-full h-auto rounded-lg shadow-lg object-cover	"
            /> */}
          </Link>
          <div className="flex items-center justify-center mt-5">
            <Link
              href="https://github.com/Rickypg711/clima"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-teal-200 hover:bg-violet-200 text-white font-bold py-2 px-4 rounded-full transition-all flex items-center">
                <FaGithub size={20} className="mr-2" />
                <span>View on GitHub</span>
              </div>
            </Link>
          </div>
          {/* your second project card */}
        </div>
        {/* third */}
        <div className="w-full md:w-1/2 lg:w-1/3 m-5">
          <Link
            href="https://clima-rust.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Image
              src={clima}
              alt="Preview of Clima project"
              // object-fit='fill'
              className="w-full h-auto rounded-lg shadow-lg"
            /> */}
          </Link>
          <div className="flex items-center justify-center mt-5">
            <Link
              href="https://github.com/Rickypg711/clima"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-teal-200 hover:bg-violet-200 text-white font-bold py-2 px-4 rounded-full transition-all flex items-center">
                <FaGithub size={20} className="mr-2" />
                <span>View on GitHub</span>
              </div>
            </Link>
          </div>
          {/* your second project card */}
        </div>

        {/* add as many project cards as you like */}
      </div>

      {/*  44*/}

      {/* <div className="my-10 flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 m-5">
          <Link
            href="https://clima-rust.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={clima}
              alt="Preview of Clima project"
              // object-fill
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </Link>
          <div className="flex items-center justify-center mt-5">
            <Link
              href="https://github.com/Rickypg711/clima"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-teal-200 hover:bg-violet-200 text-white font-bold py-2 px-4 rounded-full transition-all flex items-center">
                <FaGithub size={20} className="mr-2" />
                <span>View on GitHub</span>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}
