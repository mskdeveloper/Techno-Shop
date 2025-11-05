import Slider from "../components/Home/Slider";
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
