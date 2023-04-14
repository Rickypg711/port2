"use client";
import clima from '../../public/images/Image 3-8-23 at 5.48 PM.jpg'
import quote from '../../public/images/Image 4-13-23 at 8.36 PM.jpg'
import roket from '../../public/images/Image 4-13-23 at 8.44 PM.jpg'

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
      <div className="my-10 flex flex-wrap md:flex-no-wrap justify-center">
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
              className="w-full h-auto rounded-lg shadow-lg object-cover	"
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
                &nbsp;
                <h2>climaap</h2>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 m-5">
          <Link
            href="https://roket.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={roket}
              alt="Preview of wikiRoket project"
              // object-fit="fill"
              className="w-full h-auto rounded-lg shadow-lg object-cover	"
            />
            
          </Link>
          <div className="flex items-center justify-center mt-5">
            <Link
              href="https://github.com/Rickypg711/roket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-teal-200 hover:bg-violet-200 text-white font-bold py-2 px-4 rounded-full transition-all flex items-center">
                <FaGithub size={20} className="mr-2" />
                <span>View on GitHub</span>
                &nbsp;
                <h2>Roket</h2>
              </div>
            </Link>
          </div>
          {/* your second project card */}
        </div>
        {/* third */}
        <div className="w-full md:w-1/2 lg:w-1/3 m-5">
          <Link
            href="https://quote-api-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={quote}
              alt="Preview of quote api project"
             
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </Link>
          <div className="flex items-center justify-center mt-5">
            <Link
              href="https://github.com/Rickypg711/quote-api"
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
