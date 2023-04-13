"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// fonts
import { Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  // variable: '--montserrat',
});

// fonts

const playFairDisplay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playFairDisplay",
});

export default function Nav() {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <nav className="w-full relative bg-red  top-0 left-0 z-10">
        <div className=" justify-between px-4 mx-auto  items-center ">
          <div>
            <div className="flex mt-3 items-center">
              <div className="ml-3 mr-7">
                <Link
                  href="/"
                  className={`${playFairDisplay.className}  text-teal-200 text-xl hover:line-through decoration-violet-200 transition-all`}
                >
                  RICARDO PAREDES
                </Link>
              </div>
              <div className="nav-line is-pink"></div>
              <div className=" flex-grow h-px bg-violet-200 mx-auto"></div>
              <div>
                <div
                  className={`top-0 left-0 w-full h-full z-50 flex items-center justify-center md:block bg-slate-800 bg-opacity-75 transition-all ${
                    nav && window.innerWidth <= 768 ? "fixed" : "hidden"
                  }`}
                 
                 
                >
                  <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                    <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                      <Link href="/about" onClick={() => setNav(!nav)}>
                        About
                      </Link>
                    </li>

                    <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                      <Link href="/projects" onClick={() => setNav(!nav)}>
                        Projects
                      </Link>
                    </li>

                    <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                      <Link href="/contact" onClick={() => setNav(!nav)}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/*  */}
              <div className=" flex-grow h-px bg-violet-200 mx-auto"></div>
              <div className="nav-left-item">
                <div className=" ml-7 mr-3 text-teal-200 text-xl">
                  {window.innerWidth > 768 && (
                    <p className="text-teal-200 text-xl">2023</p>
                  )}
                  <div className="md:hidden">
                    <button
                      className="p-2 text-teal-200 rounded-md outline-none focus:border-violet-200"
                      onClick={() => setNav(!nav)}
                    >
                      {nav ? (
                        <AiOutlineClose className="text-teal-200 text-3xl hover:text-violet-200 transition-all" />
                      ) : (
                        <AiOutlineMenu className="text-teal-200 text-3xl hover:text-violet-200 transition-all" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

