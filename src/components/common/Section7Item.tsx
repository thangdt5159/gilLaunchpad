import React from "react";

const Section7item = ({ data }: any) => {
  return (
    <section className="h-full border border-[#23243e] rounded-[8px] p-[30px] bg-[#16182d]">
      <i className={`${data.icon} text-[60px] text-[#f73164] pt-5 pb-[30px]`} />
      <h3 className="mb-5 text-[20px] leading-[1.6] font-bold text-white">
        {data.title}
      </h3>
      <p className="mb-4 tracking-[0.5px] text-justify md:text-start">
        {data.des}
      </p>
    </section>
  );
};

export default Section7item;
