import Image from "next/image";
// import me from "../../../public/IMG_0085.jpeg";
import Nav from "../components/Nav";

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

import Link from "next/link";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
     <Nav/>
      {/* <div>
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
          <div className="nav-left-item nav-copyright">
            <div className=" ml-7 mr-3 text-teal-200 text-xl">©/2023</div>
          </div>
        </div>
      </div> */}

      {/*  */}
      <section className=" bg-slate-800 pt-4 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1
            className={`${playFairDisplay.className} text-3xl font-bold  text-violet-200  mb-5 `}
          >
            About Me
          </h1>
          <p className="text-violet-200  mb-8">
            Hey, Im Ricardo. Most folks know me as{" "}
            <b
              className={`${playFairDisplay.className} font-bold text-teal-200`}
            >
              aztec Warrior
            </b>{" "}
            online.  
            {/* <Image
                alt="Ricardo Paredes"
                src={me}
                width="150"
                height="150"
                className="hidden md:block  rounded-full object-cover grayscale text-right"
              /> */}
          </p>
         
          <div className=" text-violet-200  mb-8">
            <p>
              Im currently the{" "}
              <b
                className={`${playFairDisplay.className} font-bold text-teal-200`}
              >
                VP of Developer Experience at my House
              </b>
              , where I lead the Development of new web tools . i focus on  <b
                className={`${playFairDisplay.className} font-bold text-teal-200`}
              >
                educating and growing
              </b>{" "}
              my self and those around me.
            </p>

            <p>
              Im passionate about many creative pursuits, including cooking
              music, photography, and of course, coding. This combination of
              interests is what ultimately led me to my current path in building
              things as a developer .
            </p>
            <p>
              <b
                className={`${playFairDisplay.className} font-bold text-teal-200`}
              >
                I love
              </b>{" "}
              building for the web. From something as simple as a single HTML
              file – all the way to large Next.js applications. The web is
              incredible. Anyone can become a developer, writer, or creator –
              and no one has to ask for permission. You can just build.
            </p>
            <p>
              Outside of Web development, I{" "}
              <b
                className={`${playFairDisplay.className} font-bold text-teal-200`}
              >
                angel invest
              </b>{" "}
              in developer tools companies and{" "}
              <b
                className={`${playFairDisplay.className} font-bold text-teal-200`}
              >
                advise early-stage startups
              </b>
              . I also do Developer Relations consulting work, helping companies
              take their DevRel function from 0 to 1, or provide guidance on
              growing communities, content creation, and developer marketing.
            </p>
          </div>


          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <Link
              href="mailto:paredesricardog@gmail.com"
              className={` ${playFairDisplay.className} w-full md:w-auto py-3 px-6 text-center text-teal-200 font-bold rounded-lg border-2 border-teal-200 hover:border-violet-200 transition-all hover:text-violet-200`}
            >
              Get in touch
            </Link>
            {/*  */}

            <div className="flex flex-row justify-center py-3 px-6 md:items-center md:justify-between">
              <div className="mr-6">
                <Link
                  href="https://www.linkedin.com/in/ricardo-paredes-a2993a205/"
                  className="text-teal-200 text-3xl hover:text-violet-200 transition-all"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </Link>
              </div>

              <div className="mr-6">
                <Link
                  href="https://twitter.com/Rickypg711"
                  className="text-teal-200 text-3xl hover:text-violet-200 transition-all"
                  target="_blank"
                >
                  <AiFillTwitterCircle />
                </Link>
              </div>
              <div className="mr-6">
                <Link
                  href="https://www.instagram.com/rickyparedess/"
                  className="text-teal-200 text-3xl hover:text-violet-200 transition-all"
                  target="_blank"
                >
                  <AiFillInstagram />
                </Link>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </section>
    </div>
  );
}
