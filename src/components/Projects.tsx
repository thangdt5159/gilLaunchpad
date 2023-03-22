import React from "react";
import Slider from "react-slick";
import ProjectCard from "./common/ProjectCard";

const allProjectData = [
  {
    id: 1,
    cover: require("../../public/images/ino.png"),
    logo: require("../../public/images/projectCard/p-logo-1.png"),
    title: "Bet Your Coins",
    softCap: "200.000",
    maxRaise: "5.000.000",
    startTime: "17:00 UTC 21/03/23",
    endTime: "29/04/23",
    social: [
      {
        id: "1",
        icon: "fa-solid fa-share",
        link: "http://betyourcoin.fun",
      },
      {
        id: "2",
        icon: "fa-brands fa-twitter",
        link: "https://twitter.com/BetYourCoins",
      },
      {
        id: "3",
        icon: "fa-brands fa-telegram",
        link: "https://t.me/BetYourCoinsOfficialCommunity",
      },
      {
        id: "4",
        icon: "fa-brands fa-discord",
        link: "https://discord.gg/5mA2NfEzKf",
      },
    ],
  },
  {
    id: 2,
    cover: require("../../public/images/ino.png"),
    logo: require("../../public/images/projectCard/p-logo-1.png"),
    title: "Interactive Infinity",
    softCap: "100.000",
    maxRaise: "4.500.000",
    startTime: "17:00 UTC 21/03/23",
    endTime: "29/04/23",
    social: [
      {
        id: "1",
        icon: "fa-solid fa-share",
        link: "https://activeinfi.space/",
      },
      {
        id: "2",
        icon: "fa-brands fa-twitter",
        link: "https://twitter.com/Interactiveinf_",
      },
      {
        id: "3",
        icon: "fa-brands fa-telegram",
        link: "https://t.me/Interactive_Inf_Official",
      },
      {
        id: "4",
        icon: "fa-brands fa-discord",
        link: "https://discord.gg/5wk4VsFabZ",
      },
    ],
  },
  {
    id: 3,
    cover: require("../../public/images/ino.png"),
    logo: require("../../public/images/projectCard/p-logo-1.png"),
    title: "Pool Defi",
    softCap: "150.000",
    maxRaise: "5.500.000",
    startTime: "17:00 UTC 21/03/23",
    endTime: "29/04/23",
    social: [
      {
        id: "w1",
        icon: "fa-solid fa-share",
        link: "https://pooldefi.cloud/",
      },
      {
        id: "w2",
        icon: "fa-brands fa-twitter",
        link: "https://twitter.com/PoolDefi_Sui",
      },
      {
        id: "w3",
        icon: "fa-brands fa-telegram",
        link: "https://t.me/PoolDefiAnnouncements",
      },
      {
        id: "w4",
        icon: "fa-brands fa-discord",
        link: "https://discord.gg/k2s7X9gpYJ",
      },
    ],
  },
  {
    id: 4,
    cover: require("../../public/images/ino.png"),
    logo: require("../../public/images/projectCard/p-logo-1.png"),
    title: "Digital Health",
    softCap: "100.000",
    maxRaise: "3.000.000",
    startTime: "17:00 UTC 21/03/23",
    endTime: "29/04/23",
    social: [
      {
        id: "1",
        icon: "fa-solid fa-share",
        link: "https://digitalhealth.world/",
      },
      {
        id: "2",
        icon: "fa-brands fa-twitter",
        link: "https://twitter.com/_Digital_Health",
      },
      {
        id: "3",
        icon: "fa-brands fa-telegram",
        link: "https://t.me/DigitalHealthOfficialCommunity",
      },
      {
        id: "4",
        icon: "fa-brands fa-discord",
        link: "https://discord.gg/gCGtH8d2f6",
      },
    ],
  },
  {
    id: 5,
    cover: require("../../public/images/ino.png"),
    logo: require("../../public/images/projectCard/p-logo-1.png"),
    title: "Travel Global",
    softCap: "60.000",
    maxRaise: "4.000.000",
    startTime: "17:00 UTC 21/03/23",
    endTime: "29/04/23",
    social: [
      {
        id: "1",
        icon: "fa-solid fa-share",
        link: "https://travelglobal.cloud/",
      },
      {
        id: "2",
        icon: "fa-brands fa-twitter",
        link: "https://twitter.com/Travel_Global_",
      },
      {
        id: "3",
        icon: "fa-brands fa-telegram",
        link: "https://t.me/TravelGlobalCommunity",
      },
      {
        id: "4",
        icon: "fa-brands fa-discord",
        link: "https://discord.gg/CzMUPG327Q",
      },
    ],
  },
  {
    id: 6,
    cover: require("../../public/images/ino.png"),
    logo: require("../../public/images/projectCard/p-logo-1.png"),
    title: "Galaxy Social",
    softCap: "500.000",
    maxRaise: "5.000.000",
    startTime: "17:00 UTC 21/03/23",
    endTime: "29/04/23",
    social: [
      {
        id: "1",
        icon: "fa-solid fa-share",
        link: "https://galaxysocial.space",
      },
      {
        id: "2",
        icon: "fa-brands fa-twitter",
        link: " https://twitter.com/GalaxySocial_",
      },
      {
        id: "3",
        icon: "fa-brands fa-telegram",
        link: "https://t.me/GalaxySocialOfficial",
      },
      {
        id: "4",
        icon: "fa-brands fa-discord",
        link: "https://discord.gg/EG3J42zAmh",
      },
    ],
  },
  {
    id: 7,
    cover: require("../../public/images/ino.png"),
    logo: require("../../public/images/projectCard/p-logo-1.png"),
    title: "Wprotocol",
    softCap: "500.000",
    maxRaise: "5.000.000",
    startTime: "17:00 UTC 21/03/23",
    endTime: "29/04/23",
    social: [
      {
        id: "w1",
        icon: "fa-solid fa-share",
        link: "https://wprotocol.space/",
      },
      {
        id: "w2",
        icon: "fa-brands fa-twitter",
        link: "https://twitter.com/WprotocolDeFi",
      },
      {
        id: "w3",
        icon: "fa-brands fa-telegram",
        link: "https://t.me/WprotocolOfficialCommunity",
      },
      {
        id: "w4",
        icon: "fa-brands fa-discord",
        link: "https://discord.gg/P8fvzTEMjw",
      },
    ],
  },
  {
    id: 8,
    cover: require("../../public/images/ino.png"),
    logo: require("../../public/images/projectCard/p-logo-1.png"),
    title: "God Of War",
    softCap: "85.000",
    maxRaise: "6.000.000",
    startTime: "17:00 UTC 21/03/23",
    endTime: "29/04/23",
    social: [
      {
        id: "1",
        icon: "fa-solid fa-share",
        link: "https://godofwar.space",
      },
      {
        id: "2",
        icon: "fa-brands fa-twitter",
        link: "https://twitter.com/GodOfWar_NFT",
      },
      {
        id: "3",
        icon: "fa-brands fa-telegram",
        link: "https://t.me/GodOfWarNft_Official",
      },
      {
        id: "4",
        icon: "fa-brands fa-discord",
        link: "https://discord.gg/Q2G7EKhyG6",
      },
    ],
  },
];

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="md:py-[100px] py-[50px]">
        <div className="md:max-w-[1320px] mx-auto px-[15px]">
          <h2 className="text-[40px] text-white font-700 mb-[75px] leading-[1.6] px-[15px]">
            All Projects
          </h2>
          <div>
            <Slider {...settings}>
              {allProjectData.map((item) => (
                <div className="md:w-1/4 md:px-3">
                  <ProjectCard key={item.id} data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
