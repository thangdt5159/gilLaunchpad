import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <section>
      <div className="md:py-[100px] md:max-w-[1320px] px-[15px] mx-auto relative">
        <div className="bg-[#16182d] rounded-[8px]">
          <div className="md:p-[60px] md:px-[100px] p-[50px] pb-0">
            <h2 className="text-white text-[32px] md:text-[60px] font-semibold">
              Apply your project
            </h2>
            <p className="pb-[60px] pt-10">
              Full support in project incubation
            </p>
          </div>
          <div className="text-center md:text-start pb-[60px] md:pl-[100px] flex flex-wrap gap-3 justify-center">
            <button
              className="min-w-[180px] font-600 text-[16px] text-white leading-[1.7] p-[10px] rounded-full transition-all duration-300 bg-bgGil"
              onClick={() => window.open("https://forms.gle/SYVyYrCwsHyZjsa7A")}
            >
              Appy your IDO
            </button>
            <button
              className="min-w-[180px] font-600 text-[16px] text-white leading-[1.7] p-[10px] rounded-full transition-all duration-300 bg-bgGil"
              onClick={() => window.open("https://forms.gle/cLs74Wowy2JYdbeD9")}
            >
              Apply your INO
            </button>
          </div>
          <Image
            src={require("../../public/images/img_cta.png")}
            alt=""
            className="mt-[50px] md:mt-[60px] md:absolute right-[80px] top-[27px] animate-slide md:pb-[60px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
