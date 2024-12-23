import { myProjects } from "../constants/index.js";
import { useState } from "react";

const projectcount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setselectedProjectIndex] = useState(0);
  let currentProject = myProjects[selectedProjectIndex];

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
      <p className="head-text pb-5">My Work</p>
      <div className="flex items-center justify-center border-2 border-white-500 rounded-xl h-[20vh]"  >
        <p className="text-violet-300 text-lg md:text-2xl font-semibold  " >As Soon as i deploy my projects i will update this section....!</p>
      </div>
      {/* <p className="head-text">My Work</p>
      <div className="grid lg:grid-col-2 grid-cols-1 gap-5 mt-12 w-full ">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="project1"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white font-semibold text-2xl animatedText ">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between gap-5 flex-wrap">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tags, index) => (
                <img
                  key={index}
                  src={tags.path}
                  alt={tags.name}
                  className="w-10 h-10"
                />
              ))}
              <div className="relative sm:left-28 md:left-64 lg:left-[590px] xl:left-[770px] 2xl:left-[1000px]">
                <a
                  href={currentProject.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex item-center gap-5 text-white-600"
                >
                  <p>Check Live Site</p>
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow"
                    className="h-4 w-4"
                  />
                </a>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex items-center justify-between mt-7">
            <button
              className="arrow-btn"
              onClick={() => handlenavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="arrow left"
                className="h-4 w-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handlenavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="arrow left"
                className="h-4 w-4"
              />
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Projects;
