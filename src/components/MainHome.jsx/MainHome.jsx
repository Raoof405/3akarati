import React from "react";
import Hero from "../Hero/Hero";
import HomeTrend from "../HomeTrend/HomeTrend";
import CarTrend from "../Cartrend/CarTrend";
import BestDeals from "../BestDeals/BestDeals";
import Footer from "../footer/footer";

const MainHome = () => {
  return (
    <div>
      <Hero />
      <div className="w-11/12 md:w-4.5/5 m-auto ">
        <HomeTrend />
        <CarTrend />
        <BestDeals />
        {/* <AboutUs /> */}
      </div>
      <Footer />
    </div>
  );
};

export default MainHome;
