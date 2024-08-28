import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "95defde5-ab3c-437a-935e-fdddb8875699");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("Form Submitted Successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="h-screen">
      <div className="w-screen h-full p-14">
        <div className="m-10 font-extrabold italic text-2xl sm:text-5xl xl:text-7xl text-gray-800">
          <h1>Contact Me</h1>
        </div>
        <form
          onSubmit={onSubmit}
          className="m-10 h-2/3 w-1/2 flex font-medium flex-col"
        >
          <h1 className="text-4xl mb-10 font-semibold italic">
            Write me a message 👇
          </h1>
          <div className="grid grid-cols-2">
            <div className="m-2 flex flex-col">
              <label htmlFor="name">Your Name</label>
              <input
                required
                type="text"
                name="name"
                className="mt-2 p-2 border-gray-600 border-2 rounded-md"
              />
            </div>
            <div className="m-2 flex flex-col">
              <label htmlFor="email">Your Email</label>
              <input
                required
                type="email"
                name="email"
                className="mt-2 p-2 border-gray-600 border-2 rounded-md"
              />
            </div>
          </div>
          <div className="m-2 h-full flex flex-col">
            <label htmlFor="">Message</label>
            <textarea
              required
              type="text"
              name="message"
              className="h-full mt-2 p-2 border-gray-600 border-2 rounded-md"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex flex-row space-x-3">
              <a
                href="https://github.com/xChaand"
                target="_blank"
                className="bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/chaandb/"
                target="_blank"
                className="bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm p-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://drive.google.com/file/d/1CPJLFgUchNdHKOwHuYawn4JZQkGb3IcJ/view?usp=sharing"
                target="_blank"
                className="bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-md p-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <DownloadIcon />
                <span className=" ml-2 ">Download CV</span>
              </a>
            </div>
            <button className="bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 italic w-1/3 rounded-full text-3xl font-semibold p-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
