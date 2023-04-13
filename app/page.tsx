import Link from "next/link";
import Image from "next/image";
import me from '../public/images/IMG_0085.jpeg'
import { Montserrat, Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  // variable: '--montserrat',
});

const playFairDisplay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  // variable: '--font-playFairDisplay',
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="block pb-8 relative  md:flex md:justify-center md:">
        {/*  */}
        
        {/*  */}
        <section className=" bg-slate-800 pt-4 px-4 sm:px-6 lg:pt-16 lg:px-8 items-end md:flex md:align-bottom ">
          <div className="max-w-xl  mx-auto md ">
            <Image
              alt="Ricardo Paredes"
              src={me}
              width="150"
              height="150"
              className="hidden md:block  rounded-full object-cover grayscale text-right"
            />

            {/* <div className=" flex-grow h-px bg-violet-200 mx-auto"></div> */}
            <h1
              className={`${playFairDisplay.className} text-3xl font-bold  text-violet-200  mb-5`}
            >
              Ricardo Paredes
            </h1>
            <p className="text-violet-200  mb-8">
              Hey, Im Ricardo. Im a{" "}
              <b
                className={`${playFairDisplay.className} font-bold text-teal-200`}
              >
                Web Developer
              </b>{" "}
              striving to build a faster, accessible and more beautiful web.
            </p>

            <div className="flex flex-col  md:justify-between">
              <Link
                href="mailto:paredesricardog@gmail.com"
                className={` ${playFairDisplay.className} w-full md:w-auto py-3 px-6 text-center text-teal-200 font-bold rounded-lg border-2 border-teal-200 hover:border-violet-200 transition-all hover:text-violet-200`}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        {/*  */}

        {/*  */}

        {/*  */}
        <section className="bottom pt-5 ">
          {/* <div className="px-2 border-2 border-teal-500 md:pt-5" > */}
          <div className="text-center mx-auto  md:flex flex-col md:align-text-bottom md:pt-20">
            {/* aboiut */}
            <div className=" py-2 ">
              <Link
                href="/about"
                className={`${playFairDisplay.className} text-7xl md:text-8xl lg:text-9xl transition-all hover:line-through decoration-teal-200  decoration-2`}
              >
                ABOUT
              </Link>
            </div>

            {/* work */}
            <div className="py-2">
              <Link
                href="/projects"
                className={`${playFairDisplay.className} text-7xl md:text-8xl lg:text-9xl transition-all hover:line-through decoration-teal-200 decoration-2 `}
              >
                PROJECTS
              </Link>
            </div>

            {/* contact */}
            <div className="py-2">
              <Link
                href="/contact"
                className={`${playFairDisplay.className}  text-7xl md:text-8xl lg:text-9xl transition-all hover:line-through decoration-teal-200  decoration-2 `}
              >
                CONTACT
              </Link>
            </div>
          </div>
          {/* </div> */}
        </section>
      </div>
    </div>
  );
}
