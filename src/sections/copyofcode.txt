const Skills = () => {
  return (
    <section className="c-space my-20 px-14 ">
      <p className="head-text">Expertise</p>
      <br />
      <div className="flex justify-center items-center md:items-center flex-col  relative rounded-xl border-double border border-white-500  ">
        <div className="py-2 my-5 grid grid-cols-2  grid-flow-row gap-5 lg:grid-cols-6  md:grid md:grid-cols-4 xl:flex xl:flex-row  flex-col  items-center space-y-5 md:space-x-5 ">
          <div className="flex flex-col items-center justify-center relative top-[10px]  md:top-[10px] md:left-4 lg:top-2">
            <img
              src="/assets/javascript.png"
              alt="javascript-skill"
              className="w-20 h-auto md:w-[105px] lg:w-24 xl:w-24 2xl:w-24 scale-animation pb-2 "
            />
            <p className="skill-name">JavaScript</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/assets/css.png"
              alt="Css-skill"
              className="w-[85px] h-auto md:w-[115px] lg:w-[110px] xl:w-[109px] 2xl:w-[110px] scale-animation pb-2 "
            />
            <p className="skill-name" >Css</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/assets/html.png"
              alt="html-skill"
              className="w-[69px] h-auto md:w-[90px] lg:w-20 xl:w-[87px] 2xl:w-[90px] scale-animation pb-2  "
            />
            <p className="skill-name">Html</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/assets/tailwind.png"
              alt="Tailwind-skill"
              className="w-16 h-auto md:w-24 lg:w-28 xl:w-28 2xl:w-28 scale-animation pb-2 "
            />
            <p className="skill-name">Tailwind Css</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img
              src="/assets/reactpng.png"
              alt="react-skill"
              className="w-16 h-auto md:w-24 lg:w-28 xl:w-28 2xl:w-28 scale-animation pb-2 "
            />
            <p className="skill-name">React JS</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img
              src="/assets/threejs1.png"
              alt="threejs-skill"
              className="w-16 h-auto rounded-xl md:w-24 lg:w-28 xl:w-28 2xl:w-28 scale-animation pb-2 "
            />
            <p className="skill-name">Three JS</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img
              src="/assets/vscode.png"
              alt="vs-code"
              className="w-16 h-auto md:w-24 lg:w-28 xl:w-28 2xl:w-28 scale-animation pb-2 "
            />
            <p className="skill-name">Vs Code</p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img
              src="/assets/github.png"
              alt="github"
              className="w-20 h-auto md:w-24 lg:w-28 xl:w-28 2xl:w-28 scale-animation pb-2  "
            />
            <p className="skill-name">GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
