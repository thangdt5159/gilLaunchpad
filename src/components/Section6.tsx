import React from "react";
import SectionItem from "./common/SectionItem";

const Section6 = () => {
  const content = [
    {
      id: 1,
      img: require("../../public/images/ido-ifo.png"),
      title: "Moku Finance's IDO and IFO features",
      des: "Helping crypto projects to raise capital quickly and attract the attention of the community. At the same time, the IFO feature also offers potential investment opportunities for Moku users, helping them to increase their assets and contribute to the development of the cryptocurrency ecosystem.",
    },
    {
      id: 2,
      img: require("../../public/images/ino.png"),
      title: "Moku Finance's INO features",
      des: "In INO, projects issue their NFTs to Moku users to raise capital. Issued NFTs are quantified and priced, and can be used in exchange for crypto project tokens or other rewards. Moku Finance's INO feature is an advanced and groundbreaking feature in the cryptocurrency ecosystem, bringing many investment opportunities and increasing development scale for crypto projects.",
    },
  ];

  return (
    <section>
      <div className="md:py-[100px] py-[50px]">
        <div className="md:max-w-[1320px] mx-auto">
          <div className="flex flex-wrap">
            {content.map((item) => (
              <div key={item.id} className="md:w-1/2">
                <SectionItem data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
