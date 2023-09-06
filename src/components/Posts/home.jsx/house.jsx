import React from "react";
import HomeTrend from "../../HomeTrend/HomeTrend";
import Footer from "../../footer/footer";
import Navbar from "../../nav/nav";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GarageIcon from "@mui/icons-material/Garage";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const House = () => {
  return (
    <>
      <Navbar />
      <div className="w-11/12  md:w-4.5/5 m-auto ">
        <div className="py-10">
          {/* <p className="w-16 px-4 py-1 bg-red-100 rounded-lg text-sm">جديد</p> */}
          <h1 className="text-4xl font-bold ">عروض البيوت :</h1>
          <div className="deals grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-10">
            <div className="deal h-[300px] bg-white drop-shadow-2xl rounded-xl">
              <div className="relative w-[100%]">
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src="https://www.thehousedesigners.com/images/plans/URD/bulk/6583/the-destination-front-rendering_m.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 p-4">
                  <FavoriteBorderIcon size={"1.5rem"} className="text-white" />
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex space-x-5 items-center">
                  <div className="flex space-x-2 items-center">
                    <BedIcon />
                    <p className="text-sm text-gray-400">5 bed</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <BathtubIcon />
                    <p className="text-sm  text-gray-400">5 bath</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <GarageIcon />
                    <p className="text-sm text-gray-400">5 Garage</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center ">
                    <LocationOnIcon />
                    <p className="text-sm text-gray-600 ">Aleppo , syria</p>
                  </div>
                  <h1 className="text-2xl font-semibold  mr-10">$110,000</h1>
                </div>
              </div>
            </div>
            <div className="deal h-[300px] bg-white drop-shadow-2xl rounded-xl">
              <div className="relative w-[100%]">
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src="https://www.thehousedesigners.com/images/plans/URD/bulk/6583/the-destination-front-rendering_m.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 p-4">
                  <FavoriteBorderIcon size={"1.5rem"} className="text-white" />
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex space-x-5 items-center">
                  <div className="flex space-x-2 items-center">
                    <BedIcon />
                    <p className="text-sm text-gray-400">5 bed</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <BathtubIcon />
                    <p className="text-sm  text-gray-400">5 bath</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <GarageIcon />
                    <p className="text-sm text-gray-400">5 Garage</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center ">
                    <LocationOnIcon />
                    <p className="text-sm text-gray-600 ">Aleppo , syria</p>
                  </div>
                  <h1 className="text-2xl font-semibold  mr-10">$110,000</h1>
                </div>
              </div>
            </div>{" "}
            <div className="deal h-[300px] bg-white drop-shadow-2xl rounded-xl">
              <div className="relative w-[100%]">
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src="https://www.thehousedesigners.com/images/plans/URD/bulk/6583/the-destination-front-rendering_m.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 p-4">
                  <FavoriteBorderIcon size={"1.5rem"} className="text-white" />
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex space-x-5 items-center">
                  <div className="flex space-x-2 items-center">
                    <BedIcon />
                    <p className="text-sm text-gray-400">5 bed</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <BathtubIcon />
                    <p className="text-sm  text-gray-400">5 bath</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <GarageIcon />
                    <p className="text-sm text-gray-400">5 Garage</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center ">
                    <LocationOnIcon />
                    <p className="text-sm text-gray-600 ">Aleppo , syria</p>
                  </div>
                  <h1 className="text-2xl font-semibold  mr-10">$110,000</h1>
                </div>
              </div>
            </div>{" "}
            <div className="deal h-[300px] bg-white drop-shadow-2xl rounded-xl">
              <div className="relative w-[100%]">
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src="https://www.thehousedesigners.com/images/plans/URD/bulk/6583/the-destination-front-rendering_m.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 p-4">
                  <FavoriteBorderIcon size={"1.5rem"} className="text-white" />
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex space-x-5 items-center">
                  <div className="flex space-x-2 items-center">
                    <BedIcon />
                    <p className="text-sm text-gray-400">5 bed</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <BathtubIcon />
                    <p className="text-sm  text-gray-400">5 bath</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <GarageIcon />
                    <p className="text-sm text-gray-400">5 Garage</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center ">
                    <LocationOnIcon />
                    <p className="text-sm text-gray-600 ">Aleppo , syria</p>
                  </div>
                  <h1 className="text-2xl font-semibold  mr-10">$110,000</h1>
                </div>
              </div>
            </div>{" "}
            <div className="deal h-[300px] bg-white drop-shadow-2xl rounded-xl">
              <div className="relative w-[100%]">
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src="https://www.thehousedesigners.com/images/plans/URD/bulk/6583/the-destination-front-rendering_m.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 p-4">
                  <FavoriteBorderIcon size={"1.5rem"} className="text-white" />
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex space-x-5 items-center">
                  <div className="flex space-x-2 items-center">
                    <BedIcon />
                    <p className="text-sm text-gray-400">5 bed</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <BathtubIcon />
                    <p className="text-sm  text-gray-400">5 bath</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <GarageIcon />
                    <p className="text-sm text-gray-400">5 Garage</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center ">
                    <LocationOnIcon />
                    <p className="text-sm text-gray-600 ">Aleppo , syria</p>
                  </div>
                  <h1 className="text-2xl font-semibold  mr-10">$110,000</h1>
                </div>
              </div>
            </div>{" "}
            <div className="deal h-[300px] bg-white drop-shadow-2xl rounded-xl">
              <div className="relative w-[100%]">
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src="https://www.thehousedesigners.com/images/plans/URD/bulk/6583/the-destination-front-rendering_m.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 p-4">
                  <FavoriteBorderIcon size={"1.5rem"} className="text-white" />
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex space-x-5 items-center">
                  <div className="flex space-x-2 items-center">
                    <BedIcon />
                    <p className="text-sm text-gray-400">5 bed</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <BathtubIcon />
                    <p className="text-sm  text-gray-400">5 bath</p>
                  </div>

                  <div className="flex space-x-1 items-center">
                    <GarageIcon />
                    <p className="text-sm text-gray-400">5 Garage</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center ">
                    <LocationOnIcon />
                    <p className="text-sm text-gray-600 ">Aleppo , syria</p>
                  </div>
                  <h1 className="text-2xl font-semibold  mr-10">$110,000</h1>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full flex justify-center py-5">
            <button className="bg-red-300 px-5 py-2 rounded-md text-xl flex items-center space-x-2">
              <span>لرؤية المزيد</span>
            </button>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default House;
