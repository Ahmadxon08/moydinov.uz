import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div className=" flex justify-between items-center">
        <Spotlight
          className="-top-60 md:w-full sm:-left-32 sm:w-full -left-10 w-full md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-100 md:w-full -right-10 w-full md:-right-32 md:-top-20 h-screen"
          fill="blue"
        />
     
      </div>
     
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          
          <p className="text-center md:tracking-wider mb-2 mt-3 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Ahmadxon, a Front End Developer.
          </p>
          <TextGenerateEffect
            words="I'm a front end developer (React.js ) with a focus on creating  exceptional digital experiences that are fast, accessible, visually appealing, and responsive. "
            className="text-center sm:mb-5 text-[40px] md:text-5xl lg:text-6xl"
          />

          <a href="#projects" >
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
