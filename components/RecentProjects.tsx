
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../data";
import { PinContainer } from "./ui/3D-pin";
const bg = "./bg.png";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection <span className="text-blue-400">recent projects</span>
      </h1>
      <div className="flex flex-wrap justify-between items-center p-4 gap-x-4 gap-y-8 mt-10">
        {projects.map((pro) => (
          <div
            key={pro.id}
            // 
            className="flex flex-col mx-auto h-[32rem] w-[280px] md:w-[570px] items-center justify-center"
          >
            <PinContainer title={pro.link} href={pro.link}>
              <div
                // S
                className="flex relative h-[30vh] items-center mb-10 w-[280px] md:w-[570px] overflow-hidden lg:h-[30vh]"
              >
                <div className="flex relative h-full w-full">
                  <img
                    src={bg}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <img
                  src={pro.img}
                  alt={pro.title}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {pro.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {pro.des}
              </p>
              <div
                // 
                className="flex justify-between w-[280px] md:w-[570px] items-center mb-3 mt-7"
              >
                <div className="flex items-center">
                  {pro?.iconLists.map((icon, i) => (
                    <div
                      key={icon}
                      style={{
                        transform: `translateX(-${5 * i * 2}px)`,
                      }}
                      className="border bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center border-white/[0.2] rounded-full"
                    >
                      <img src={icon} alt="icons" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <a href={pro.link} target="blank" className="flex sm:text-sm lg:text-xl md:text-xs text-sm text-purple">
                    Check this project
                    <FaLocationArrow className="ms-3" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;