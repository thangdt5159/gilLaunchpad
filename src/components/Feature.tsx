import React from "react";

const Feature = () => {
  return (
    <section>
      <div className="md:py-[100px]">
        <div className="md:max-w-[1320px] mx-auto px-[15px] flex justify-between items-center">
          <div className="w-1/2">
            <div className="w-[640px] h-[870px] bg-red-300"></div>
          </div>
          <div className="w-1/2 px-[15px]">
            <h5 className="uppercase text-[1.125rem] mb-[1rem]">
              WELCOME TO MOKU FINANCE
            </h5>
            <h2 className="text-[36px] text-white mt-5 mb-[30px] font-700 leading-[1.6]">
              What We Will Do
            </h2>
            <p className="mb-4">
              Moku Finance is a product of Global Interlink, a newly launched
              cryptocurrency trading platform with the aim of helping
              cryptocurrency projects scale and grow through fundraising
              activities. This platform offers three different fundraising
              methods including IDO, INO, IFO to meet the needs of different
              projects.
            </p>
            <p className="mb-4">
              Projects that are approved by IDO will go through our rigorous
              accreditation board. These projects will certainly bring great
              potential to the community.
            </p>
            <p className="mb-4">
              In the form of INO, the project issues limited editions of NFTs
              and sells them to investors. This helps investors own unique
              versions of NFTs and at the same time support the project.
            </p>
            <p className="mb-4">
              With IFO, project owners can quickly push their projects to Moku
              without going through any censorship. Raising capital and
              attracting users will happen quickly.
            </p>
            <p className="mb-4">
              Moku Finance is attracting the attention of the crypto community
              with its diversity in capital raising as well as the development
              potential of supported projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
