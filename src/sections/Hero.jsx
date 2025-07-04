import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Button from "../componenets/Botton.jsx";


const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const istablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, istablet);
  return (
    <section id="about" className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center relative">

      <div className="flex flex-col lg:flex-row items-center" >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <div className="flex flex-row justify-center items-center gap-2">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
        Hello, 
        </p>
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans animate-pulse transition-all duration-100">I'm Vipul Suthar.</p>
        </div>
        <p className="hero_tag text-gray_gradient">I am a Web Developer</p>
        
        <div className="flex flex-row gap-2 justify-center items-center">
          <a href="https://github.com/VIPULSUTHAR14" target="_blank" >
          <img src="/assets/github.png" alt="github" className="size-16 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] " />
          </a>
          <a href="https://www.linkedin.com/in/vipul-suthar-172028333/" target="_blank" >
          <img src="/assets/Linked-in.png" alt="Linked-in" className="size-12 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.6)] " />
          </a>
        </div>
      </div>
      <span>
      <img
  src="/assets/avtar2.png"
  alt="avtar"
  className="sm:block hidden p-8 sm:p-24 rounded-full grayscale hover:grayscale-0 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.6)]"
/>

      </span>
      </div>
      <div className="absolute bottom-[-65px] left-0 right-0 w-full z-10 c-space ">
        <a href="#contact" className="w-fit" >
          <Button name="let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
