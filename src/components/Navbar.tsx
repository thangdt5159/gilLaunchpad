import Image from "next/image";
import React, { useState } from "react";

export const menuData = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Wallet",
  },
  {
    id: 3,
    title: "Dex",
  },
  {
    id: 4,
    title: "Marketplace",
  },
  {
    id: 5,
    title: "Docs",
  },
  {
    id: 6,
    title: "Contact Us",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <section>
      <div className="md:py-5 py-3 fixed top-0 left-0 right-0 bg-bg z-[100]">
        <div className="md:max-w-[1320px] mx-auto px-[15px]">
          <div className="w-full flex items-center justify-between">
            <Image
              src={require("../../public/images/logo.png")}
              alt=""
              className="h-[50px] w-auto"
            />
            <ul className="hidden md:flex items-center justify-between gap-6">
              {menuData.map((item) => (
                <li
                  key={item.id}
                  className="py-2 px-[13px] font-700 text-[16px] cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>

            {/* hamburger */}
            <div
              className="md:hidden py-1 px-3 border border-[hsla(0,0%,100%,.1)] rounded-[8px] text-[28px] text-[hsla(0,0%,100%,.55)] leading-[1] flex"
              onClick={() => setToggle(!toggle)}
            >
              <i className="fa-solid fa-bars" />
            </div>
          </div>
        </div>
      </div>

      {/* menu toggle */}
      {toggle && (
        <div className="fixed bg-bg w-full text-center pt-[80px] pb-5 z-[99]">
          <ul className="mx-5 bg-[#16182d] rounded-b-[6px]">
            {menuData.map((item) => (
              <li
                key={item.id}
                className="py-2 px-[13px] font-700 text-[16px] cursor-pointer border-b border-white/10"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
