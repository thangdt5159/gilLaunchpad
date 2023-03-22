import React from "react";

const About = () => {
  const content = [
    {
      id: 1,
      icon: "fa-solid fa-bars-progress",
      heading: "Our Mission",
      title: "Bringing potential projects to the world",
      des: "Moku Finance provides crypto projects with a platform to efficiently raise capital and scale. By providing different forms of fundraising, including IDO, IFO and INO. Moku Finance helps crypto projects to raise capital quickly, attract the attention of potential investors and develop sustainably.",
    },
    {
      id: 2,
      icon: "fa-regular fa-eye",
      heading: "Our Vision",
      title: "Development of the crypto community",
      des: "Moku Finance is to become an important part of the Sui ecosystem, supporting cryptocurrency projects to grow by providing an advanced and diversified fundraising platform. In addition, Moku Finance also aims to build a strong community of crypto users, support each other and develop the cryptocurrency ecosystem together.",
    },
  ];

  return (
    <section>
      <div className="md:py-[100px] py-[50px] bg-[#16182d]">
        <div className="md:max-w-[1320px] mx-auto px-[15px]">
          <div className="text-center flex flex-wrap justify-between items-center">
            {content.map((item) => (
              <div key={item.id} className="md:w-1/2 p-[30px]">
                <div className="bg-darkBlue w-[100px] h-[100px] rounded-full flex justify-center items-center mx-auto mb-[30px]">
                  <i className={`${item.icon} text-[36px] text-white`}></i>
                </div>
                <h5 className="uppercase text-[16px] font-700 mb-[10px]">
                  {item.heading}
                </h5>
                <h3 className="text-[24px] text-white mb-5">{item.title}</h3>
                <p className="mb-4 text-justify md:text-center">{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
