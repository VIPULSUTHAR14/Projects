import Globe from "react-globe.gl"
import Botton from "../componenets/Botton";
import { useState } from "react";


const About = () => {
  const [hasCopied,sethasCopied] = useState(false)
  const handlecopy = ()=>{
    navigator.clipboard.writeText('vipulsutharwork@gmail.com')
    sethasCopied(true)
    setTimeout(() => {
      sethasCopied(fasle);
    }, 20000);
  }
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-row-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container ">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Hi I'm Vipul</p>
              <p className="grid-subtext">
                I am actively learning and enhancing my skills in the field of
                web development, with a current focus on creating 3D animated
                websites.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/web-development-responsive.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript and Three.js, with a strong focus on
                the React ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4" >
            <div className="grid-container" >
                <div className="rounded-3xl w-full sm:h-[326px] h-fit  flex justify-center items-center"  >
                    <Globe 
                    width={326}
                    height={326}
                    backgroundColor="rgba(0,0,0,0)"
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    />
                </div>
                <div >
                    <p className="grid-headtext" >I can work remotely and also have the ability to work in a team</p>
                    <p className="grid-subtext">I based on India, with remote work available and open to relocation</p>
                    <Botton name="Contact Me" isBeam containerClass="w-full mt-10" />
                </div>
            </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3" >
            <div className="grid-container">
                <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain" />
                <div>
                    <p className="grid-headtext">My passion for Coding</p>
                    <p className="grid-subtext">I love learning new things and I am always eager to take on new challenges.Coding isn't my profession, but it's my passion.</p>
                </div>
            </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
                <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                <div className="space-y-2">
                  <p className="grid-subtext text-center" >Contact Me</p>
                  <div className="copy-container" onClick={handlecopy} >
                    <img src={hasCopied? "/assets/tick.svg" : "/assets/copy.svg"} alt="not found" />
                    <p className="xl:text-lg md:text-xl font-medium text-gray_gradient text-white" >vipulsutharwork@gmail.com</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
