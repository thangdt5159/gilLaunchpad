import React from "react";
import ProjectCard from "./common/ProjectCard";

const projectData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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

const UpcomingProject = () => {
  return (
    <section>
      <div className="md:py-[100px]">
        <div className="md:max-w-[1320px] mx-auto px-[15px]">
          <h2 className="text-[40px] text-white font-700 mb-[75px] leading-[1.6] px-[15px]">
            Upcoming Projects
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {projectData.map((item) => (
              <div key={item.id}>
                <ProjectCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProject;
