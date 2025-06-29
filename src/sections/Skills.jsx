import React from "react";

const Skills = () => {
  return (
   <div>
    <p className="head-text pl-10">My Skills</p>
     <div className="w-[100vw] flex flex-col items-center justify-center">
      <br />
      <div className="ring-2 ring-white-800  rounded-lg">
        <div className="flex flex-row  px-32 py-10 justify-center items-center ">
          <div className="grid grid-cols-5 gap-32">
            <div className="group flex flex-col items-center justify-center p-4 gap-4 drop-shadow-blue-900 hover:bg-gradient-to-t from-cyan-900 to-black-200 rounded-lg transition-all duration-300">
              <img
                src="/assets/reactpng.png"
                alt="react"
                className="size-20 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold  group-hover:text-black-200 transition-all duration-300">React</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-gradient-to-t from-cyan-300 to-violet-600 rounded-lg transition-all duration-300">
              <img
                src="/assets/tailwind.png"
                alt="tailwind"
                className="size-20 group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-blue-900"
              />
              <p className="text-white-800 text-2xl font-bold  group-hover:text-black-200 transition-all duration-300">Tailwind</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-gradient-to-t from-black-200 to-gray-600 rounded-lg transition-all duration-300">
              <img
                src="/assets/nodeJs.png"
                alt="nodejs"
                className="size-20 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold group-hover:text-green-900 transition-all duration-300">Node.js</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="/assets/MongoDB.png"
                alt="mongodb"
                className="size-20 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">MongoDB</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="/assets/expressJS.png"
                alt="express"
                className="size-20 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">Express</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="/assets/html.png"
                alt="html"
                className="size-20 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">HTML</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="/assets/javascript.png"
                alt="javascript"
                className="size-20 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">JavaScript</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img src="/assets/css.png" alt="css" className="size-20  group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white-800 text-2xl font-bold">CSS</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="/assets/github.png"
                alt="git"
                className="size-20 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">Git Hub</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="/assets/vscode.png"
                alt="git"
                className="size-20 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">VS Code</p>
            </div>
            <div className="group flex flex-col items-center justify-center p-4 gap-4 hover:bg-black-600 rounded-lg transition-all duration-300">
              <img
                src="/assets/threejs1.png"
                alt="git"
                className="size-20 rounded-2xl group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white-800 text-2xl font-bold">Three js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Skills;
