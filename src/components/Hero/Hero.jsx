import React from "react";
import Navbar from "../nav/nav";

const Hero = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>

      {/* <nav className="flex justify-between items-center py-5">
        <h1 className="text-xl md:text-2xl font-bold ">Real_Estate</h1>
        <ul className="flex items-center space-x-5 text-xs md:text-base">
          <li className="ml-4">Features</li>
          <li>Trending</li>
          <li>About</li>
        </ul>
        <button className="bg-yellow-400 px-5 py-2 rounded-xl text-xs md:text-base">
          Contact
        </button>
      </nav> */}
      <div className="h-[500px] relative">
        <img
          className="w-full h-full object-cover "
          src="https://wallpapers.com/images/hd/real-estate-modern-white-house-dcxpp5xsw4e7wqgc.jpg"
          alt=""
        />
        <div className="absolute bottom-5 w-full ">
          <div className="w-11/12 xl:w-4/5 m-auto bg-white grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2xl md:space-x-4 md:rounded-md ">
            <div className="flex flex-col space-y-2">
              <label htmlFor="">الموقع</label>
              <input
                type="text"
                placeholder="ادخل الموقع"
                className="outline-0 text-xs"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="">المساحة</label>
              <input
                type="text"
                placeholder="ادخل المساحة"
                className="outline-0 text-xs"
              />
            </div>{" "}
            <div className="flex flex-col space-y-2">
              <label htmlFor="">السعر</label>
              <input
                type="text"
                placeholder="$1000.000"
                className="outline-0 text-xs"
              />
            </div>
            <div>
              <button className="bg-red-400 px-5 py-2 mt-5 md:mt-0 md:rounded-full ">
                بحث
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
