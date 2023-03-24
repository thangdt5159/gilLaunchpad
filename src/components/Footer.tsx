import Image from "next/image";
import React from "react";
import { socials } from "./Header";
import { menuData } from "./Navbar";

const Footer = () => {
  return (
    <section>
      <div className="md:pt-[100px] pt-[50px] pb-[30px] md:pb-[60px] md:max-w-[1320px] mx-auto">
        <div className="px-[15px] flex flex-wrap items-center justify-between">
          <div className="mx-auto mb-5 md:mb-5">
            <Image
              src={require("../../public/images/logo.png")}
              alt=""
              className="w-auto h-[80px] mb-4 cursor-pointer mx-auto"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            <p className="text-center md:text-start">
              Your launchpad to a world of financial opportunities
            </p>
          </div>
          <div className="mx-auto">
            <ul className="flex flex-wrap items-center justify-center">
              {menuData.map((item) => (
                <li
                  key={item.id}
                  className="py-2 px-[13px] font-700 text-[16px] cursor-pointer"
                  onClick={() => window.open(item.link)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-5 items-center justify-center mt-5">
              <p>Follow us:</p>
              {socials.map((item) => (
                <i
                  key={item.id}
                  className={`${item.icon} text-[24px] cursor-pointer`}
                  onClick={() => window.open(item.link)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white/10 w-full h-[1px]"></div>
      <p className="text-[14px] text-center py-5">
        © Copyright 2023 Moku All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
