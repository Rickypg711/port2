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
      <Nav />

      <section className=" bg-slate-800 pt-4 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1
            className={`${playFairDisplay.className} text-3xl font-bold  text-violet-200  mb-5 `}
          >
            About Me
          </h1>
          <p className="text-violet-200  mb-8">
            Hi there! My name is Ricardo, I'm a passionate front-end developer
            with experience in a variety of tools and technologies. I've spent
            the last few years honing my skills in{" "}
            <b
              className={`${playFairDisplay.className} font-bold text-teal-200`}
            >
              React, Next.js, CSS, TypeScript, and HTML5,
            </b>{" "}
            and I'm always eager to learn more.
          </p>

          <div className=" text-violet-200  mb-8">
            <p>
              My background in management has taught me valuable skills in
              <b
                className={`${playFairDisplay.className} font-bold text-teal-200`}
              >
                {" "}
                project planning, team collaboration, and effective
                communication
              </b>
              . I've also had the opportunity to work on back-end development
              projects using{" "}
              <b
                className={`${playFairDisplay.className} font-bold text-teal-200`}
              >
                {" "}
                Python, Node.js, and REST APIs{" "}
              </b>
              .
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
              As a developer, I'm committed to creating beautiful, user-friendly
              interfaces that deliver a seamless user experience. I'm always
              exploring new tools and technologies to improve my skills and stay
              ahead of the curve. Outside of development, I've gained valuable
              experience in social media marketing, and I'm comfortable using
              tools like GitHub to manage my projects and collaborate with other
              developers. If you're looking for a dedicated developer with a
              passion for creating innovative solutions, please don't hesitate
              to get in touch. I'm excited to hear about your next project and
              explore how I can contribute to your team.
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
