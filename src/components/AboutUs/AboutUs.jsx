import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const AboutUs = () => {
  return (
    <div className="w-11/12 m-32 flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 py-10">
      <div className="flex space-x-4 md:space-x-10">
        <div className="space-y-5">
          <div className="w-48 flex flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
            <LocationOnIcon />
            <h1 className="text-xl font-bold">good services</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              ducimus eveniet{" "}
            </p>
          </div>
          <div className="w-48 flex flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
            <LocationOnIcon />
            <h1 className="text-xl font-bold">good services</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              ducimus eveniet{" "}
            </p>
          </div>
        </div>
        <div className="m-5 space-y-4">
          <div className="w-48 flex flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
            <LocationOnIcon />
            <h1 className="text-xl font-bold">good services</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              ducimus eveniet{" "}
            </p>
          </div>
          <div className="w-48 flex flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
            <LocationOnIcon />
            <h1 className="text-xl font-bold">good services</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              ducimus eveniet{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-1/2 space-y-5">
        <h1 className="text-6xl font-bold ">
          Know <span className="text-yellow-400">About Us</span>
        </h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ducimus
          eveniet{" "}
        </p>
        <button className="px-5 py-2 bg-yellow-400 rounded-md">
          Read more
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
