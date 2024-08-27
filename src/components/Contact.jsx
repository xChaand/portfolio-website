import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div className="h-screen">
      <div className="w-screen p-10">
        <div className="m-10 font-extrabold italic text-2xl sm:text-5xl xl:text-7xl text-gray-800">
          <h1>Contact Me</h1>
        </div>
        <form action="" className="m-10  w-1/2 flex font-medium flex-col">
          <h1 className="text-4xl mb-10 font-semibold italic">
            Write me a message 👇
          </h1>
          <div className="grid grid-cols-2">
            <div className="m-2 flex flex-col">
              <label htmlFor="">Your Name</label>
              <input type="text" className="mt-2" />
            </div>
            <div className="m-2 flex flex-col">
              <label htmlFor="">Your Email</label>
              <input type="text" className="mt-2" />
            </div>
          </div>
          <div className="m-2 flex flex-col">
            <label htmlFor="">Message</label>
            <input type="text" className="mt-2" />
          </div>
        </form>
      </div>
    </div>
  );
}
