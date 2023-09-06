import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

const BestDeals = () => {
  return (
    <div>
      <div className="w-11/12 md:w-1/2 xl:w-1/3 m-auto text-center py-10">
        <h1 className="text-4xl font-bold">افضل انواع العقارات لدينا</h1>
        <p className="text-xs text-gray-400 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          quam amet vel explicabo quae deserunt provident nostrum, reiciendis ad
          debitis modi, rerum quia ut? Consequatur ratione sed quo consequuntur
          eum.
        </p>
      </div>
      <div className="deals w-full grid lg:grid-flow-col grid-rows-1 gap-8">
        <div className="deal relative col-span-2 row-span-2 cursor-pointer">
          <Link to="/posts/House">
            {" "}
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://www.sibfl.net/wp-content/uploads/2018/07/Building-Department-featured-image.jpg"
              alt=""
            />
          </Link>

          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">البيوت</h1>
            {/* <p className="flex space-x-2 items-center text-sm">
              <LocationOnIcon />
              افضل الاسعار
            </p> */}
          </div>
        </div>
        <div className="deal relative col-span-2 row-span-1 cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://www.thehousedesigners.com/images/plans/URD/bulk/6583/the-destination-front-rendering_m.jpg"
            alt=""
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">المحلات</h1>
            {/* <p className="flex space-x-2 items-center text-sm">
              <LocationOnIcon />
            </p> */}
          </div>
        </div>
        <div className="deal relative col-span-1 row-span-1 cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://www.thehousedesigners.com/images/plans/URD/bulk/6583/the-destination-front-rendering_m.jpg"
            alt=""
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">الاراضي</h1>
            {/* <p className="flex space-x-2 items-center text-sm">
              <LocationOnIcon />
            </p> */}
          </div>
        </div>{" "}
        <div className="deal relative col-span-1 row-span-1 cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://www.thehousedesigners.com/images/plans/URD/bulk/6583/the-destination-front-rendering_m.jpg"
            alt=""
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">السيارات</h1>
            {/* <p className="flex space-x-2 items-center text-sm">
              <LocationOnIcon />
            </p> */}
          </div>
        </div>
        <div className="deal relative col-span-1 row-span-1 cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://www.thehousedesigners.com/images/plans/URD/bulk/6583/the-destination-front-rendering_m.jpg"
            alt=""
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">الفيلات</h1>
            {/* <p className="flex space-x-2 items-center text-sm">
              <LocationOnIcon />
            </p> */}
          </div>
        </div>{" "}
        {/* <div className="deal relative col-span-1 row-span-1">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://www.thehousedesigners.com/images/plans/URD/bulk/6583/the-destination-front-rendering_m.jpg"
            alt=""
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">Houses</h1>
            <p className="flex space-x-2 items-center text-sm">
              <LocationOnIcon />
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BestDeals;
