"use client";
import { useState } from "react";
import { cn } from "../../lib/Utils";
import { BackgroundGradientAnimation } from "./GreidientBg";
import Lottie from "lottie-react";
import animationData from "./../../data/confetti.json";
import MagicButton from "./../MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  titleClassName,
  img,
  imgClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopied = () => {
    navigator.clipboard.writeText("contact@example.com");
    setCopied(true);
    console.log(copied);
  };
  const leftLists = ["ReactJS", "Bootsrap", "Typescript"];
  const rightLists = ["TailwindCss", "NextJS", "Sass"];

  return (
    <div
      className={cn(
        "row-span-1 overflow-hidden space-y-4 border-white/[0.1] rounded-3xl relative group/bento hover:shadow-xl transition  duration-200 shadow-input dark:shadow-none  bg-white border justify-between flex flex-col ",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(77,77,114,1) 31%, rgba(75,88,91,1) 100%)",
      }}
    >
      <div
        className={`
            ${id === 6} && justify-center h-full flex`}
      >
        <div className="w-full h-full justify-between flex absolute">
          {img && (
            <img
              src={img}
              alt="img"
              className={cn(" object-cover object-center", imgClassName)}
            />
          )}
        </div>
        <div
          className={`
            absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt="img"
              className={cn(" object-cover object-center h-full w-full")}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 text-red-500 font-bold items-center justify-center"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover bento:translate-x-2 transition md:h-full min-h-40 flex flex-col px-5 py-4 lg:p-10 duration-200 relative"
          )}
        >
          <div className="font-sans font-exrtalight  text-[#c1c2d3] text-sm md:text-xl lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans  font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-6 lg:-right-8">
              <div className="flex flex-col gap-3   md:gap-3 lg:gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 relative   lg:gap-3">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id == 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />
              </div>
              <MagicButton
                handleClick={handleCopied}
                otherClasses="!bg-[#161a31]"
                icon={<IoCopyOutline />}
                position="left"
                title={copied ? " Email copied" : "Copy my email"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
