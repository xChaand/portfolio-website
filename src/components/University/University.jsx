export default function University() {
  return (
    <div className="w-screen">
      <div className="h-screen backdrop-blur-md font-semibold flex flex-col text-center justify-center text-lg sm:text-2xl xl:text-4xl text-gray-800">
        <h1>
          I'm a <span className="italic">Sophomore</span> at the{" "}
          <span className="font-bold">University of Wisconsin-Madison</span>
        </h1>
        <p className="text-sm mt-2 text-white font-bold">
          <span className="bg-red-600 p-1 italic">🦡 #GoBadgers! 🦡</span>
        </p>
        <br />
        <h1 className="font-medium">
          Studying <span className="italic underline">Computer Science</span>{" "}
          and <span className="italic underline">Philosophy</span>
        </h1>
        <div className="mt-4 grid grid-cols-5 text-justify">
          <div className="col-start-2 p-10 col-span-3 backdrop-blur-xl text-xl font-normal ">
            <p>
              I have expertise in front-end development using{" "}
              <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">TypeScript</span> and various
              frameworks. I enjoy exploring & experimenting with technologies in
              my spare time{" "}
            </p>
            <p className="mt-3 italic font-light text-base">
              *this portfolio started off with me experimenting with{" "}
              <span className="font-semibold">React Three Fiber</span>.
            </p>
            <br />
            <p>
              I also have extensive experience with building production level
              web applications using{" "}
              <span className="font-semibold">Node.js</span> (
              <span className="font-semibold">REST APIs</span>),{" "}
              <span className="font-semibold">Prisma</span>,{" "}
              <span className="font-semibold">Figma</span>, Popular component
              libraries and Content management systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
