import Image from "next/image";
import React from "react";

const Feature = () => {
  const content = [
    {
      id: 1,
      des: "Moku Finance is a product of Global Interlink, a newly launched cryptocurrency trading platform with the aim of helping cryptocurrency projects scale and grow through fundraising activities. This platform offers three different fundraising methods including IDO, INO, IFO to meet the needs of different projects.",
    },
    {
      id: 2,
      des: "Projects that are approved by IDO will go through our rigorous accreditation board. These projects will certainly bring great potential to the community.",
    },
    {
      id: 3,
      des: "In the form of INO, the project issues limited editions of NFTs and sells them to investors. This helps investors own unique versions of NFTs and at the same time support the project.",
    },
    {
      id: 4,
      des: "With IFO, project owners can quickly push their projects to Moku without going through any censorship. Raising capital and attracting users will happen quickly.",
    },
    {
      id: 5,
      des: "Moku Finance is attracting the attention of the crypto community with its diversity in capital raising as well as the development potential of supported projects.",
    },
  ];

  return (
    <section>
      <div className="md:py-[100px]">
        <div className="md:max-w-[1320px] mx-auto px-[15px] flex flex-wrap justify-between items-center">
          <div className="md:w-5/12 px-[15px]">
            <Image
              src={require("../../public/images/moku-finance.png")}
              alt=""
              className="mb-10 md:mb-0 rounded-[8px]"
            />
          </div>
          <div className="md:w-1/2 px-[15px]">
            <h5 className="uppercase text-[1.125rem] mb-[1rem]">
              WELCOME TO MOKU FINANCE
            </h5>
            <h2 className="text-[36px] text-white mt-5 mb-[30px] font-700 leading-[1.6]">
              What We Will Do
            </h2>
            {content.map((item) => (
              <p key={item.id} className="mb-4 text-justify">
                {item.des}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
