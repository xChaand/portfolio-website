export default function University() {
  return (
    <div className="p-20 w-screen">
      <div className="h-screen mt-10 pt-10 flex flex-col text-center justify-start text-2xl sm:text-4xl xl:text-5xl text-gray-800">
        <h1>
          I'm a <span className="italic">Sophomore</span> at the{" "}
          <span className="font-semibold">University of Wisconsin-Madison</span>
        </h1>
        <p className="text-sm mt-2 text-white font-bold">
          <span className="bg-red-600 p-1 italic">🦡 #GoBadgers! 🦡</span>
        </p>
        <br />
        <h1>
          Studying <span className="italic underline">Computer Science</span>{" "}
          and <span className="italic underline">Philosophy</span>
        </h1>
      </div>
    </div>
  );
}
