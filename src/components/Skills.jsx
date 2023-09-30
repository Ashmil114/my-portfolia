import Aos from "aos";
import React from "react";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiPhp,
  SiDjango,
  SiFlask,
  SiMysql,
  SiTailwindcss,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className="h-fit bg-black">
        <h1 className="text-[100px] font-[600] invisible lg:visible absolute text-center w-full -mt-6 text-white">
          .<span className="text-[#8D8D8D]">.</span>.
        </h1>
        <div className="lg:flex w-full min-h-screen overflow-hidden">
          <div
            className="lg:w-[50%]  lg:h-screen lg:flex lg:justify-center lg:gap-16 lg:flex-col lg:items-center  min-h-screen lg:relative absolute text-white flex flex-col gap-16  justify-center p-[15px] ml-[40px]"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="false"
          >
            <div className="lg:flex lg:gap-4 gap-10 lg:justify-normal lg:w-auto w-full justify-around grid grid-cols-3">
              <div className="lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]">
                <span className="text-[#F8DE22] lg:text-[18px] text-[15px] ">
                  python
                </span>
                <FaPython className="lg:text-[70px] text-[50px]" />
              </div>
              <div className="lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]">
                <span className="text-[#F8DE22] lg:text-[18px] text-[15px] ">
                  html
                </span>
                <FaHtml5 className="lg:text-[70px] text-[50px]" />
              </div>
              <div className="lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]">
                <span className="text-[#F8DE22] lg:text-[18px] text-[15px] ">
                  css
                </span>
                <FaCss3Alt className="lg:text-[70px] text-[50px]" />
              </div>
              <div className="lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]">
                <span className="text-[#F8DE22] lg:text-[18px] text-[15px] ">
                  javascript
                </span>
                <IoLogoJavascript className="lg:text-[70px] text-[50px]" />
              </div>
              <div className="lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]">
                <span className="text-[#F8DE22] lg:text-[18px] text-[15px] ">
                  php
                </span>
                <SiPhp className="lg:text-[70px] text-[50px]" />
              </div>
            </div>
            <div className="lg:flex lg:gap-4 gap-10 lg:justify-normal lg:w-auto w-full justify-around grid grid-cols-3">
              <div className="lg:w-[70px] lg:h-[70px] text-center w-[35px] h-[35px]">
                <span className="text-[#F8DE22] lg:text-[18px] text-[15px] ">
                  django
                </span>
                <SiDjango className="lg:text-[70px] text-[35px]" />
              </div>
              <div className="lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]">
                <span className="text-[#F8DE22] lg:text-[18px] text-[15px] ">
                  flask
                </span>
                <SiFlask className="lg:text-[70px] text-[50px]" />
              </div>
              <div className="lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]">
                <span className="text-[#F8DE22] lg:text-[18px] text-[15px] ">
                  react
                </span>
                <FaReact className="lg:text-[70px] text-[50px]" />
              </div>
              <div className="lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]">
                <span className="text-[#F8DE22] lg:text-[18px] text-[15px] ">
                  mysql
                </span>
                <SiMysql className="lg:text-[70px] text-[50px]" />
              </div>
              <div className="lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]">
                <span className="text-[#F8DE22] lg:text-[18px] text-[15px] ">
                  tailwind
                </span>
                <SiTailwindcss className="lg:text-[70px] text-[50px]" />
              </div>
              <div className="lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]">
                <span className="text-[#F8DE22] lg:text-[18px] text-[15px] ">
                  bootstrap
                </span>
                <FaBootstrap className="lg:text-[70px] text-[50px]" />
              </div>
            </div>
            <div className="lg:flex lg:gap-4 gap-10 lg:justify-normal lg:w-auto w-full justify-around grid grid-cols-5">
              <div className="lg:w-[40px] lg:h-[40px] text-center w-[30px] h-[30px] ">
                <span className="text-[#F8DE22] text-[12px]">numpy</span>
                <SiNumpy className="lg:text-[40px] text-[30px]" />
              </div>
              <div className="lg:w-[40px] lg:h-[40px] text-center w-[30px] h-[30px] ">
                <span className="text-[#F8DE22] text-[12px]">pandas</span>
                <SiPandas className="lg:text-[40px] text-[30px]" />
              </div>
              <div className="lg:w-[40px] lg:h-[40px] text-center w-[30px] h-[30px] ">
                <span className="text-[#F8DE22] text-[12px]">scikitlearn</span>
                <SiScikitlearn className="lg:text-[40px] text-[30px]" />
              </div>
            </div>
          </div>
          <div className="lg:w-[50%]  lg:h-screen lg:flex lg:flex-col lg:items-center lg:justify-center   min-h-screen relative">
            <h1
              className="lg:text-[360px] lg:font-[600]  text-[#F8DE22] lg:ml-[1rem] lg:p-1 text-[100px]  lg:relative absolute bottom-0 flex justify-end w-full lg:justify-center pr-6 md:text-[150px]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              02
            </h1>
            <h1
              className="lg:text-[40px] lg:-mt-[7rem] text-white flex justify-center lg:justify-normal pt-9 text-[40px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              SKILLS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
