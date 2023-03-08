import React from "react";

const Navbar = () => {
  const data = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Explore",
    },
    {
      id: 3,
      title: "Staking",
    },
    {
      id: 4,
      title: "Pages",
    },
    {
      id: 5,
      title: "Sign In",
    },
  ];

  return (
    <section>
      <div className="md:py-5 fixed top-0 left-0 right-0 bg-bg">
        <div className="md:max-w-[1320px] mx-auto px-[15px]">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-[24px] font-700">LOGO</h1>
            <ul className="flex items-center justify-between">
              {data.map((item) => (
                <li
                  key={item.id}
                  className={`py-2 px-[13px] font-700 text-[16px] cursor-pointer ${
                    item.id === 5 &&
                    "bg-darkBlue text-bs text-white py-[5px] px-[15px] rounded-full leading-[1.7] border border-darkBlue transition-all duration-300 hover:bg-[#0016d9] hover:border-[#0015cc]"
                  }`}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
