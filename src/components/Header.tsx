import React, { useRef } from "react";
import Slider from "react-slick";

const Header = () => {
  const socials = [
    {
      id: 1,
      icon: "fa-brands fa-facebook",
      url: "",
    },
    {
      id: 2,
      icon: "fa-brands fa-twitter",
      url: "",
    },
    {
      id: 3,
      icon: "fa-brands fa-tiktok",
      url: "",
    },
    {
      id: 4,
      icon: "fa-brands fa-telegram",
      url: "",
    },
    {
      id: 5,
      icon: "fa-brands fa-discord",
      url: "",
    },
  ];

  const img = [
    {
      id: 1,
      image: "/images/header/",
    },
    {
      id: 2,
      image: "/images/header/",
    },
    {
      id: 3,
      image: "/images/header/",
    },
    {
      id: 4,
      image: "/images/header/",
    },
  ];

  const sliderRef = useRef<any>(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section>
      <div className="md:py-[100px]">
        <div className="md:max-w-[1320px] mx-auto px-[15px] flex justify-between items-center">
          <div className="w-1/2">
            <h5 className="uppercase text-[1.125rem] mb-[1rem]">
              Elevate your investment with Moku Finance
            </h5>
            <h1 className="text-white text-[4rem] font-700 leading-[1.3] mb-[30px]">
              Blockchain projects are changing the world
            </h1>
            <div className="mb-[50px]">
              <button className="md:min-w-[150px] font-600 text-[16px] text-white leading-[1.7] p-[10px] border border-darkBlue rounded-full transition-all duration-300 bg-darkBlue hover:bg-[#0016d9]">
                IDO
              </button>
              <button className="md:min-w-[150px] font-600 text-[16px] text-white leading-[1.7] p-[10px] border border-darkBlue rounded-full transition-all duration-300 hover:bg-darkBlue mx-5">
                IFO
              </button>
              <button className="md:min-w-[150px] font-600 text-[16px] text-white leading-[1.7] p-[10px] border border-darkBlue rounded-full transition-all duration-300 hover:bg-darkBlue">
                INO
              </button>
            </div>
            <div className="md:max-w-[450px] bg-[#16182d] py-[5px] px-5 rounded-[16px]">
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Search Project"
                  className="md:w-[90%] bg-transparent focus:outline-none placeholder:font-400 placeholder:text-lightGray/50"
                />
                <i className="fa-solid fa-magnifying-glass text-[24px] ml-[10px] leading-[1.8]"></i>
              </form>
            </div>
            <div className="mt-[50px]">
              {socials.map((item) => (
                <i className={`${item.icon} text-[24px] mr-5`} />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <Slider {...settings} ref={sliderRef}>
              {img.map((item) => (
                <div className="bg-red-300 md:h-[420px]">{item.image}</div>
              ))}
            </Slider>
            <div className="absolute right-[20px] bottom-[40px] flex items-center">
              <div
                className="bg-darkBlue rounded-full w-10 h-10 text-white text-center flex justify-center items-center cursor-pointer"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <i className="fa-solid fa-arrow-left-long"></i>
              </div>
              <div
                className="bg-darkBlue rounded-full w-10 h-10 ml-[10px] text-white text-center flex justify-center items-center cursor-pointer"
                onClick={() => sliderRef.current.slickNext()}
              >
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
