import React from "react";
import Section7item from "./common/Section7Item";

const Section7 = () => {
  const listData = [
    {
      id: 1,
      title: "Diverse features",
    },
    {
      id: 2,
      title: "Friendly interface",
    },
    {
      id: 3,
      title: "Lowest cost",
    },
  ];

  const cardData = [
    {
      id: 1,
      icon: "fa-solid fa-shield",
      title: "Investor protection",
      des: "Moku Finance protects its investors from any FUD related to fundraising",
    },
    {
      id: 2,
      icon: "fa-solid fa-rocket",
      title: "Boosting projects",
      des: "Launch and prove your utility to users and investors without having the rug pulled out",
    },
    {
      id: 3,
      icon: "fa-solid fa-people-group",
      title: "Massive Community",
      des: "Moku Finance attracts a large community and many users worldwide, driving growth and increasing the availability of the ecosystem",
    },
  ];

  return (
    <section>
      <div className="md:py-[100px] md:max-w-[1320px] px-[15px] mx-auto">
        <h2 className="md:w-[60%] text-[32px] md:text-[40px] mb-[75px] px-[15px] font-bold leading-[1.6] text-white">
          Multi-featured, secure and easy-to-use crypto fundraising platform
        </h2>
        <div className="flex flex-wrap items-center">
          <div className="md:w-1/3 px-[15px] mb-[50px] md:mb-0">
            <ul>
              {listData.map((item) => (
                <li key={item.id} className="flex items-center">
                  <i className="fa-solid fa-angle-right text-[18px] mr-[10px] my-3"></i>
                  <span className="font-medium">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/3 md:px-[15px] flex flex-wrap">
            {cardData.map((item) => (
              <div key={item.id} className="md:w-1/3 md:px-3 mb-[50px] md:mb-0">
                <Section7item data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
