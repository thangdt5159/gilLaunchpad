import Image from "next/image";
import React from "react";

const SectionItem = ({ data }: any) => {
  return (
    <section className="px-[15px]">
      <Image src={data.img} alt="" className="mb-[30px] rounded-[8px]" />
      <h3 className="mb-[30px] text-[1.5rem] text-white font-bold ">{data.title}</h3>
      <p className="mb-4 text-justify">{data.des}</p>
    </section>
  );
};

export default SectionItem;
