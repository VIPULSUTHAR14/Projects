import React, { Suspense } from "react";
import { Canvas, ReactThreeFiber } from "@react-three/fiber";
import HackerRoom from "../componenets/HackerRoom";
import CanvasLoader from "../componenets/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../componenets/Target.jsx";
import Reactlogo from "../componenets/Reactlogo.jsx";
import JavascriptLogo from "../componenets/JavascriptLogo.jsx";
import Css_Logo from "../componenets/Css_Logo.jsx";
import Html_Logo from "../componenets/Html_Logo.jsx";
import Button from "../componenets/Botton.jsx";
import Gaming_setup from "../componenets/Gaming_setup.jsx";
// import { Leva, useControls } from 'leva';
import Gaming_desk from "../componenets/Gaming_desk.jsx";


const Hero = () => {
  // const { x, y, z } = useControls({
  //   x: { value: 0, min: -Math.PI, max: Math.PI },
  //   y: { value: 0, min: -Math.PI, max: Math.PI },
  //   z: { value: 0, min: -Math.PI, max: Math.PI },
  // });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const istablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, istablet);
  return (
    <section id="about" className="min-h-screen h-full w-full flex flex-row relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi,I am Vipul <span className="waving-hand">🤚🏻</span>
        </p>
        <p className="hero_tag text-gray_gradient">I am a Web Developer</p>
      </div>
      <div className="w-full h-full absolute inset-0 ">
        <Canvas className="w-full h-full ">
          <Suspense fallback={<CanvasLoader />}>
            <perspectiveCamera makeDefault position={[0, 0, 20]} />

            <Gaming_desk
              
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[-1.35 , 0 , 0]}
            />

            <group>
              <Html_Logo position={sizes.HtmlPosition} scale={0.015}  />
              <Css_Logo position={sizes.CssPosition} scale={0.015} />
              <Reactlogo position={sizes.reactLogoPosition} />
              <JavascriptLogo position={sizes.JavascriptLogoPosition}  />
            </group>  

            <ambientLight intensity={2} />
            <directionalLight position={[0.24, 3.14, 0.60]} intensity={1}  />
            <directionalLight position={[0.24, 3.14, 0.60]} intensity={1}  />

          </Suspense>
        </Canvas>
        </div>
        br
        <div className="absolute bottom-[-65px] left-0 right-0 w-full z-10 c-space">
          <a href="#contact" className="w-fit" >
            <Button name="let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>
        </div>

    </section>
  );
};

export default Hero;
