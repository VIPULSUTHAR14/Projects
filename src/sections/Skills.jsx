import React from "react";

const skills = [
  { name: "React", src: "/assets/reactpng.png" },
  { name: "Tailwind", src: "/assets/tailwind.png" },
  { name: "Node.js", src: "/assets/nodeJs.png" },
  { name: "MongoDB", src: "/assets/MongoDB.png" },
  { name: "Express", src: "/assets/expressJS.png" },
  { name: "HTML", src: "/assets/html.png" },
  { name: "JavaScript", src: "/assets/javascript.png" },
  { name: "CSS", src: "/assets/css.png" },
  { name: "GitHub", src: "/assets/github.png" },
  { name: "VS Code", src: "/assets/vscode.png" },
  { name: "Three.js", src: "/assets/threejs1.png" },
];

const Skills = () => {
  return (
    <div>
      <p className="head-text pl-10">My Skills</p>
      <div className="w-[100vw] flex flex-col items-center justify-center">
        <br />
        <div className="ring-2 ring-white rounded-lg">
          <div className="flex flex-row px-4 md:px-32 py-10 justify-center items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-4 gap-4 bg-black hover:bg-gradient-to-t from-cyan-700 to-black rounded-lg transition-all duration-300"
                >
                  <img
                    src={skill.src}
                    alt={skill.name.toLowerCase()}
                    className="size-20 group-hover:scale-110 transition-transform duration-300 rounded-2xl"
                  />
                  <p className="text-white text-2xl font-bold group-hover:text-cyan-300 transition-all duration-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
