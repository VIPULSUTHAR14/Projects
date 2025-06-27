import React from "react";

const Skills = () => {
  return (
    <div>
      <p className="text-white-800 text-2xl font-bold">My Skills</p>
      <br />
      <div className="ring-2 ring-white-800 w-[1920px] h-auto bg-black-100 rounded-lg">
        <div className="flex flex-row  px-32 py-10 justify-center items-center ">
          <div className="grid grid-cols-4 gap-32">
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600  rounded-lg transition-all duration-300">
              <img
                src="public\assets\reactpng.png"
                alt="react"
                className="size-32 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">React</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="public\assets\tailwind.png"
                alt="tailwind"
                className="size-32 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">Tailwind</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="public\assets\nodejs.png"
                alt="nodejs"
                className="size-32 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">Node.js</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="public\assets\mongodb.png"
                alt="mongodb"
                className="size-32 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">MongoDB</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="public\assets\expressJs.png"
                alt="express"
                className="size-32 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">Express</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="public\assets\html.png"
                alt="html"
                className="size-32 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">HTML</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="public\assets\javascript.png"
                alt="javascript"
                className="size-32 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">JavaScript</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img src="public\assets\css.png" alt="css" className="size-32 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white-800 text-2xl font-bold">CSS</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="public\assets\github.png"
                alt="git"
                className="size-32 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">Git Hub</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="public\assets\vscode.png"
                alt="git"
                className="size-32 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">VS Code</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="public\assets\threejs1.png"
                alt="git"
                className="size-32 rounded-2xl group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">Three js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
