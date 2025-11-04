import React, { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import ProductData from "../../assets/Data.json";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import brand1 from "../../assets/images/dell.png";
import brand2 from "../../assets/images/samsung.png";
import brand3 from "../../assets/images/sanyo.png";
import brand4 from "../../assets/images/lenovo.png";
import brand5 from "../../assets/images/oppo.png";
import brand6 from "../../assets/images/panasonic.png";
import brand7 from "../../assets/images/asus.png";
import { Link, useNavigate, useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const products = ProductData.Products;
  const navigate = useNavigate();
  const product = products.find((p) => p.Id === parseInt(id));

  const [showZoom, setShowZoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const [isWishlisted, setIsWishlisted] = useState(false);
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = wishlist.some((item) => item.Id === product?.Id);
    setIsWishlisted(exists);
  }, [product?.Id]);

  const handleWishlistIcon = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = wishlist.some((item) => item.Id === product.Id);
    let updatedList;
    if (exists) {
      updatedList = wishlist.filter((item) => item.Id !== product.Id);
      toast.info("Removed from wishlist");
    } else {
      updatedList = [...wishlist, product];
      toast.success("Added to wishlist");
    }
    localStorage.setItem("wishlistItems", JSON.stringify(updatedList));
    setIsWishlisted(!exists);
  };

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = wishlist.some((item) => item.Id === product.Id);
    if (!exists) {
      const updatedList = [...wishlist, product];
      localStorage.setItem("wishlistItems", JSON.stringify(updatedList));
      toast.success("Added to wishlist");
    } else {
      toast.info("Product already in wishlist");
    }
    setTimeout(() => {
      navigate("/wishlist");
    }, 1500);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const exists = cart.some((item) => item.Id === product.Id);
    if (!exists) {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      toast.success("Added to cart");
    } else {
      toast.info("Product already in cart");
    }
    setTimeout(() => {
      navigate("/cart");
    }, 1500);
  };

  if (!product)
    return (
      <div className="p-10 text-center text-xl bg-yellow-300">
        Product Not Found
      </div>
    );

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />
      {/* page section */}
      <div className="px-[8%] lg:[px-12%] w-full bg-yellow-100 py-4 ">
        <div className="text-lg text-gray-600 flex justify-center items-center cpace-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-red-900 font-semibold">Product Details</span>
        </div>
      </div>
      {/* Product Details */}
      <div className="px-[8%] lg:[px-12%] flex flex-col md:flex-row items-center gap-10 py-20">
        <div className="w-full md:w-1/2 flex gap-6 justify-between px-[80px] py-[50px] border rounded-xl shadow-md relative">
          {/* Main Image */}
          <div
            className="relative w-[250px] h-[250px] overflow-hidden rounded-xl shadow-md border cursor-pointer "
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              src={product.ProductsImage}
              alt={product.Name}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Zoomed Image */}
          {showZoom && (
            <div className="w-[250px] h-[250px] border overflow-hidden hidden rounded-xl shadow-md md:block relative z-20">
              <img
                src={product.ProductsImage}
                alt="Zoom"
                className="absolute w-[500px] h-[500px] object-contain pointer-events-none"
                style={{
                  left: `-${mousePosition.x * 1.2}px`,
                  top: `-${mousePosition.y * 2.5}px`,
                }}
              />
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-sm font-semibold bg-red-500 inline-block px-3 py-1 rounded text-white mb-4 ">
            {product.Category}
          </p>
          <h2 className="text-3xl font-bold font-bricolage text-black mb-3">
            {product.Name}
          </h2>
          <div className="text-2xl font-bold text-gray-400 mb-2">
            ${product.Price}
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
            ducimus amet maxime enim odit laudantium atque iure unde! Laudantium
            veniam laborum eos exercitationem recusandae quod beatae vero
            suscipit ipsa qui.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-yellow-500 transition duration-300 cursor-pointer"
            >
              Add To cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-red-500 transition duration-300 cursor-pointer"
            >
              Add To wishlist
            </button>
          </div>
          <div className="my-3 bg-red-100 p-3">
            <p className="text-semibold">
              - consectetur adipisicing elit. Corrupti, magnam?
            </p>
            <p className="text-semibold">
              - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-semibold">
              - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti, magnam?
            </p>
          </div>
        </div>
      </div>
      {/* Policys */}
      <div className="px-[8%] lg:[px-12%]">
        <h2 className="font-bricolage font-bold text-3xl mb-5">
          Shiping Policy
        </h2>
        <p className="mb-3 text-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
          sit?Quas, sit?Quas, sit?Quas, sit?
        </p>
        <p className="mb-3 text-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          fuga ab labore, ea consequuntur laboriosam.
        </p>
        <p className="mb-1">Lorem ipsum dolor sit amet.</p>
        <p className="mb-1">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </p>
        <p className="mb-3 text-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          fuga ab labore, ea consequuntur laboriosam.
        </p>
        <p className="mb-1">Lorem ipsum dolor sit amet.</p>
        <p className="mb-1">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </p>
        <p className="mb-3 text-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          fuga ab labore, ea consequuntur laboriosam.
        </p>
        <p className="mb-1">Lorem ipsum dolor sit amet.</p>
        <p className="mb-1">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </p>
        <h2 className="font-bricolage font-bold text-3xl mb-5 mt-10">
          Returns Policy
        </h2>
        <p className="mb-3 text-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          fuga ab labore, ea consequuntur laboriosam.
        </p>
        <p className="mb-1">Lorem ipsum dolor sit amet.</p>
        <p className="mb-1">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </p>
      </div>
      {/* Add Review */}
      <div className="px-[8%] lg:[px-12%] py-[50px]">
        <div className="px-[2%] pt-[20px] border rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 font-bricolage">
            Add a Review
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Your Rate
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="" disabled>
                  Select Rating
                </option>
                <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                <option value="4">⭐⭐⭐⭐ (4)</option>
                <option value="3">⭐⭐⭐ (3)</option>
                <option value="2">⭐⭐ (2)</option>
                <option value="1">⭐ (1)</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Your Review
              </label>
              <textarea
                rows="4"
                placeholder="Enter Your Review"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-red-400 text-white font-semibold px-6 py-2 rounded-lg cursor-pointer transition duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
      {/* Brands */}
      <div className="px-[8%] lg:[px-12%] py-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            1399: { slidesPerView: 5 },
            1199: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            575: { slidesPerView: 3 },
            0: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="flex justify-center items-center h-20">
            <img
              src={brand1}
              alt=""
              className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center h-20">
            <img
              src={brand2}
              alt=""
              className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center h-20">
            <img
              src={brand3}
              alt=""
              className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center h-20">
            <img
              src={brand4}
              alt=""
              className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center h-20">
            <img
              src={brand5}
              alt=""
              className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center h-20">
            <img
              src={brand6}
              alt=""
              className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center h-20">
            <img
              src={brand7}
              alt=""
              className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ProductDetails;
