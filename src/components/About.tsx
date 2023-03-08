import React from "react";

const About = () => {
  return (
    <section>
      <div className="md:py-[100px] bg-[#16182d]">
        <div className="md:max-w-[1320px] mx-auto px-[15px] md:flex justify-between items-center">
          <div className="md:w-1/2 px-[15px] text-center">
            <div className="p-[30px]">
              <div className="bg-darkBlue w-[100px] h-[100px] rounded-full flex justify-center items-center mx-auto mb-[30px]">
                <i className="fa-solid fa-bars-progress text-[36px] text-white"></i>
              </div>
              <h5 className="uppercase text-[16px] font-700 mb-[10px]">
                Our Mission
              </h5>
              <h3 className="text-[24px] text-white mb-5">
                Bringing potential projects to the world
              </h3>
              <p className="mb-4">
                Moku Finance provides crypto projects with a platform to
                efficiently raise capital and scale. By providing different
                forms of fundraising, including IDO, IFO and INO. Moku Finance
                helps crypto projects to raise capital quickly, attract the
                attention of potential investors and develop sustainably.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 px-[15px] text-center">
            <div className="p-[30px]">
              <div className="bg-darkBlue w-[100px] h-[100px] rounded-full flex justify-center items-center mx-auto mb-[30px]">
                <i className="fa-regular fa-eye text-[36px] text-white"></i>
              </div>
              <h5 className="uppercase text-[16px] font-700 mb-[10px]">
                Our Vision
              </h5>
              <h3 className="text-[24px] text-white mb-5">
                Development of the crypto community
              </h3>
              <p className="mb-4">
                Moku Finance is to become an important part of the Sui
                ecosystem, supporting cryptocurrency projects to grow by
                providing an advanced and diversified fundraising platform. In
                addition, Moku Finance also aims to build a strong community of
                crypto users, support each other and develop the cryptocurrency
                ecosystem together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
