import { Typewriter } from "react-simple-typewriter";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export default function Hero() {
  let nameAudio = new Audio("public/chaand.mp3");
  return (
    <div className="w-screen">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex items-center text-8xl text-white">
          Hi I'm <span className="ml-4 mr-4 font-medium">Chaand</span>
          <button
            onClick={() => nameAudio.play()}
            className=" bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <VolumeUpIcon />
          </button>
        </div>
        <span className="mt-4 text-5xl text-gray-300">
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
      </div>
    </div>
  );
}
