import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <section>
      <div className="md:py-[100px] md:max-w-[1320px] px-[15px] mx-auto relative">
        <div className="bg-[#16182d] rounded-[8px]">
          <div className="md:p-[60px] p-[50px] pb-0">
            <h2 className="text-white text-[32px] md:text-[60px] font-semibold">
              Apply your project
            </h2>
            <p className="pb-[60px] pt-10">
              Full support in project incubation
            </p>
          </div>
          <div className="text-center md:text-start pb-[60px] md:pl-[60px]">
            <button
              className="min-w-[150px] font-600 text-[16px] text-white leading-[1.7] p-[10px] border border-darkBlue rounded-full transition-all duration-300 bg-darkBlue hover:bg-[#0016d9] mr-3"
              onClick={() => window.open("https://forms.gle/SYVyYrCwsHyZjsa7A")}
            >
              IDO
            </button>
            <button
              className="min-w-[150px] font-600 text-[16px] text-white leading-[1.7] p-[10px] border border-darkBlue rounded-full transition-all duration-300 hover:bg-darkBlue"
              onClick={() => window.open("https://forms.gle/cLs74Wowy2JYdbeD9")}
            >
              INO
            </button>
          </div>
          <Image
            src={require("../../public/images/img_cta.png")}
            alt=""
            className="mt-[50px] md:mt-0 md:absolute right-0 top-[27px] animate-slide md:pb-[60px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
