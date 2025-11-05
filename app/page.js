"use client";
import React from "react";

import Slider from "../components/Home/slider";
import Banners from "../components/Home/Banners";
import PopularProducts from "../components/Home/PopularProducts";

const page = () => {
  return (
    <>
      <div className="bg-element"></div>
      <Slider />
      <Banners />
      <PopularProducts />
    </>
  );
};

export default page;
