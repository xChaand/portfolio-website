import { Typewriter } from "react-simple-typewriter";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DownloadIcon from "@mui/icons-material/Download";

export default function Hero() {
  let nameAudio = new Audio("/chaand.mp3");
  return (
    <div className="w-screen">
      <div className="md:grid md:grid-cols-2">
        <div className="h-screen p-16 flex flex-col items-start justify-center">
          <div className="flex items-center text-7xl text-gray-800">
            Hi I'm <span className="ml-4 mr-4 font-medium">Chaand</span>
            <button
              onClick={() => nameAudio.play()}
              className="bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <VolumeUpIcon />
            </button>
          </div>
          <span className="mt-4 text-5xl text-gray-600">
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
          <p className="mt-4 text-xl">
            Ever since I was young, I've been fascinated by how computers work
            and love using that knowledge to create cool software. I'm always
            learning, building, integrating, solving and overcoming failure.
          </p>
          <div className="mt-4 flex flex-row space-x-3">
            <a
              href="https://github.com/xChaand"
              className="bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/chaandb/"
              className="bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <LinkedInIcon />
            </a>
            <a
              href=""
              className="bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <DownloadIcon />
              <span className="ml-2">Download CV</span>
            </a>
            <a
              href=""
              className="bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <LocalPhoneIcon />
              <span className="ml-2">Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
