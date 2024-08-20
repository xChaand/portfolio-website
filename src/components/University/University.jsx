export default function University() {
  return (
    <div className="w-screen">
      <div className="h-screen backdrop-blur-sm flex flex-col text-center justify-center text-lg sm:text-2xl xl:text-3xl text-gray-800">
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
