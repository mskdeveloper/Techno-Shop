import React from "react";
// import banner1 from "/images/page/banner-1.jpg";
// import banner2 from "/images/page/banner-2.jpg";
// import banner3 from "/images/page/banner-3.jpg";
// import banner4 from "/images/page/banner-4.jpg";
// import banner5 from "/images/page/banner-5.jpg";

const Banners = () => {
  return (
    <>
      {/* Banners */}
      <div className="px-[8%] lg:px-[12%] py-20">
        <div
          className="container mx-auto banner-1 flex flex-col justify-center gap-5 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
          style={{ backgroundImage: `url(/images/page/banner-5.jpg)` }}
        >
          <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
            EXCLUSIVE HEADPHONE
          </small>
          <h3 className="text-7xl font-semibold font-bricolage">
            Release Date & Price
          </h3>
          <p className="text-2xl">Today's Super Offer</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-12">
          {/* Baner1 */}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{
              backgroundImage: `url(/images/page/banner-1.jpg)`,
            }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
          {/* Baner2 */}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(/images/page/banner-2.jpg)` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
          {/* Baner3 */}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(/images/page/banner-3.jpg)` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
          {/* Baner4 */}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(/images/page/banner-4.jpg)` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banners;
