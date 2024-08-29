import { Typewriter } from "react-simple-typewriter";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import DownloadIcon from "@mui/icons-material/Download";

export default function Hero() {
  let nameAudio = new Audio("/chaand.mp3");
  return (
    <div className="w-screen">
      <div className="lg:grid lg:grid-cols-2">
        <div className="h-screen p-16 flex flex-col items-start justify-start md:justify-center">
          <div className="flex items-center text-2xl sm:text-5xl xl:text-7xl text-gray-800">
            Hi I'm Chaand
            <button
              onClick={() => nameAudio.play()}
              className="flex ml-2 sm:ml-4 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full p-2 sm:p-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <VolumeUpIcon />
            </button>
          </div>
          <span className=" mt-2 md:mt-4 text-lg sm:text-3xl md:text-5xl text-gray-600">
            <Typewriter
              words={["Developer", "Biker", "Hooper"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <p className="mt-2 text-lg sm:text-xl">
            Ever since I was young, I've been fascinated by how computers work
            and love using that knowledge to create cool software.{" "}
            <span className="hidden md:flex">
              I'm always learning, building, integrating, solving and overcoming
              failure.
            </span>
          </p>
          <div className="mt-4 w-full space-x-2">
            <a
              href="https://github.com/xChaand"
              target="_blank"
              className=" bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full p-2 sm:p-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/chaandb/"
              target="_blank"
              className=" bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 sm:p-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://drive.google.com/file/d/1CPJLFgUchNdHKOwHuYawn4JZQkGb3IcJ/view?usp=sharing"
              target="_blank"
              className="bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 sm:p-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <DownloadIcon />
              <span className=" ml-2 ">Download CV</span>
            </a>

            <a
              href="https://github.com/xChaand/portfolio-website"
              target="_blank"
              className="invisible sm:visible bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-2 sm:p-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <CodeIcon />
              <span className="ml-2">Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
