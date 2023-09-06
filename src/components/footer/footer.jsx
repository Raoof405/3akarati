import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
const footer = () => {
  return (
    <div className="mt-20">
      <div className="w-full py-16 ">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="text-xl md:text-3xl font-bold">لتحميل التطبيق عبر </h1>
          <div className="flex ">
            <div className="flex items-center space-x-1 px-2 py-2 rounded drop-shadow-xl cursor-pointer">
              <ShopIcon />
              <div className="">
                {/* <p className="text-xs">get on</p> */}
                <h1 className="text-lg mr-2">Google play</h1>
              </div>
            </div>
            <div className="flex items-center space-x-1 px-2 py-2 rounded drop-shadow-xl cursor-pointer">
              <AppleIcon />
              <div>
                {/* <p className="text-xs">get on</p> */}
                <h1 className="text-lg mr-2">Apple store</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full py-10 bg-neutral-800 text-white">
        <div className="w-11/12 md:w-1/3 m-auto flex flex-col items-center text-center space-y-5">
          <h1 className="text-2xl font-bold">عقاراتي</h1>
          {/* <ul className="flex items-center space-x-5 text-sm">
            <li>features</li>
            <li>Trending</li>
            <li>about</li>
          </ul> */}
          <div className="flex items-center gap-8">
            <TelegramIcon className="cursor-pointer" />
            <TwitterIcon className="cursor-pointer" />
            <InstagramIcon className="cursor-pointer" />
            <FacebookIcon className="cursor-pointer" />
          </div>
          <p className="p-5 text-sm text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias iste
            animi placeat tenetur, soluta, ratione odit dolores reiciendis
            corporis eveniet facilis laborum dicta dignissimos voluptatibus
            architecto suscipit earum modi optio.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
