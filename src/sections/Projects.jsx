import { myProjects } from "../constants/index.js";
import { useState } from "react";

const projectcount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setselectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handlenavigation = (direction) => {
    setselectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectcount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectcount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="work" className="c-space my-20">
      <p className="head-text">My Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-12 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black">
          <div className="absolute top-0 right-0 w-full h-96">
            <img
              src={currentProject.spotlight}
              alt="project spotlight"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt={`${currentProject.title} logo`}
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white my-5">
            <p className="font-semibold text-2xl animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-5">
            <div className="flex items-center gap-3 flex-wrap">
              {currentProject.tags.map((tag, index) => {
                const IconComponent = tag.icon;
                return (
                  <span key={index} className="w-10 h-10 flex items-center justify-center">
                    <IconComponent size={40} color="#61dafb" />
                  </span>
                );
              })}
            </div>

            <a
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white underline"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center justify-between mt-7">
            <button
              className="arrow-btn"
              onClick={() => handlenavigation("previous")}
              aria-label="Previous Project"
            >
              <img src="/assets/left-arrow.png" alt="Previous" className="h-4 w-4" />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handlenavigation("next")}
              aria-label="Next Project"
            >
              <img src="/assets/right-arrow.png" alt="Next" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
