import Slider from "../components/Home/Slider";
import Banners from "../components/Home/Banners";
import PopularProducts from "../components/Home/PopularProducts";
import BestDeals from "@/components/Home/BestDeals";

const page = () => {
  return (
    <>
      <Slider />
      <Banners />
      <PopularProducts />
      <BestDeals />
    </>
  );
};

export default page;
