export default function Projects() {
  const projects = [
    { id: 1, title: "Hello", description: "lorem" },
    { id: 2, title: "Elo", description: "" },
    { id: 3, title: "Ola", description: "" },
  ];
  return (
    <div className="w-screen">
      <div className="h-screen flex flex-col">
        <h1 className="mt-4 ml-20 text-2xl sm:text-5xl xl:text-7xl text-gray-800">
          Projects
        </h1>
        <div className="h-full grid p-14 grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg backdrop-blur-xl mb-12 m-4"
            >
              {project.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
