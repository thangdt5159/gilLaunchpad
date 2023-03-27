import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";

export const socials = [
  {
    id: 1,
    icon: "fa-brands fa-twitter",
    link: "https://twitter.com/MokuFinance",
  },
  {
    id: 2,
    icon: "fa-brands fa-discord",
    link: "https://discord.com/invite/SemS7uXaBT",
  },
  {
    id: 3,
    icon: "fa-brands fa-medium",
    link: "https://globalinterlink.medium.com/",
  },
  {
    id: 4,
    icon: "fa-brands fa-telegram",
    link: "https://t.me/GlobalInterlinkAnnouncements",
  },
  {
    id: 5,
    icon: "fa-brands fa-youtube",
    link: "https://www.youtube.com/@globalinterlink",
  },
];

const Header = () => {
  const img = [
    {
      id: 1,
      image: require("../../public/images/3.jpg"),
    },
    {
      id: 2,
      image: require("../../public/images/4.jpg"),
    },
    {
      id: 3,
      image: require("../../public/images/3.jpg"),
    },
    {
      id: 4,
      image: require("../../public/images/4.jpg"),
    },
  ];

  const sliderRef = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section>
      <div className="md:py-[100px] pt-[100px] pb-[50px]">
        <div className="md:max-w-[1320px] mx-auto px-[15px] flex flex-wrap justify-between items-center">
          <div className="md:w-1/2">
            <h5 className="uppercase text-[1.125rem] mb-[1rem] text-center md:text-start">
              Elevate your investment with Moku Finance
            </h5>
            <h1 className="text-white text-[4rem] font-700 leading-[1.3] mb-[30px] text-center md:text-start">
              Blockchain projects are changing the world
            </h1>
            <div className="mb-[50px] text-center md:text-start">
              <button
                className="min-w-[150px] font-600 text-[16px] text-white leading-[1.7] p-[10px] rounded-full transition-all duration-300 bg-bgGil mr-5"
                onClick={() => window.open("https://token-launchpad.gil.eco/")}
              >
                IDO
              </button>
              <button
                className="min-w-[150px] font-600 text-[16px] text-white leading-[1.7] p-[10px] bg-bgGil rounded-full transition-all duration-300"
                onClick={() => window.open("https://launchpad.gil.eco/")}
              >
                INO
              </button>
            </div>
            {/* <div className="md:max-w-[450px] bg-[#16182d] py-[5px] px-5 rounded-[16px]">
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Search Project"
                  className="md:w-[90%] bg-transparent focus:outline-none placeholder:font-400 placeholder:text-lightGray/50"
                />
                <i className="fa-solid fa-magnifying-glass text-[24px] ml-[10px] leading-[1.8]"></i>
              </form>
            </div> */}
            <div className="mt-[50px] text-center md:text-start">
              {socials.map((item) => (
                <i
                  key={item.id}
                  className={`${item.icon} text-[24px] mr-5 cursor-pointer`}
                  onClick={() => window.open(item.link)}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative w-full mt-[50px]">
            <Slider {...settings} ref={sliderRef}>
              {img.map((item) => (
                <Image key={item.id} src={item.image} alt="" />
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
