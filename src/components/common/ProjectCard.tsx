import Image from "next/image";
import Link from "next/link";
import React from "react";

import Slider from "react-slick";
// import { LaunchpadObject } from "../../api/type/sui";
// import moment from "moment";
// import { Progress } from "antd";
// import Countdown from "react-countdown";
// import { SUI_DECIMAL } from "../../api/constants";
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";
// import ShareItem from "../../atoms/ShareItem";
// interface IProps {
//   launchpad: LaunchpadObject;
//   status?: "live" | "upcoming" | "past";
// }

const ProjectCard = ({ data }: any) => {
  return (
    <div className="bg-bgGrad shadow-common backdrop-blur-[12.5px] rounded-[20px] transition-all duration-300">
      <div className="relative p-6 pb-0">
        <Image
          src={require("../../../public/images/ino.png")}
          alt=""
          className="rounded-[20px]"
        />
        <Image
          src={require("../../../public/images/projectCard/p-logo-1.png")}
          alt=""
          className="absolute rounded-full border-[3px] border-[#2B294B] object-cover w-[64px] h-[64px] translate-y-[-50%] left-[32px]"
        />
      </div>
      <div className="px-[32px] pb-[24px] pt-1 text-[12px] leading-[1]">
        <h3 className="leading-[30px] font-800 text-[20px] text-white ml-[70px] whitespace-nowrap overflow-ellipsis">
          {data.title}
        </h3>
        <div className="flex justify-between items-center mt-5">
          <p>Soft cap:</p>
          <p className="text-white">{data.softCap}</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p>Max raise:</p>
          <p className="text-white">{data.maxRaise}</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p>Start at:</p>
          <p className="text-white">{data.startTime}</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p>End in:</p>
          <p className="text-white">{data.endTime}</p>
        </div>
        <div className="flex justify-center gap-4 mt-5 text-[20px]">
          {data.social.map((social: any) => (
            <i
              key={social.id}
              className={`${social.link ? social.icon : "hidden"}`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
        <button
          className="bg-bgGrad2 font-600 text-white text-[16px] rounded-full h-[46px] w-full mt-5"
          onClick={() => window.open("https://token-launchpad.gil.eco/")}
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
