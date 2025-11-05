"use client";
import React from "react";
import Image from "next/image";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation";

import ProductData from "../../public/Data.json";

import { AiOutlineShoppingCart } from "react-icons/ai";

const PopularProducts = () => {
  const products = ProductData.Products;
  const specialOffer = products.find((p) => p.Id === 7);

  const navigate = useRouter();

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const exists = cart.some((item) => item.Id === product.Id);

    if (!exists) {
      const updateCart = [...cart, { ...product, quantity: 1 }];
      localStorage.setItem("cartItems", JSON.stringify(updateCart));
      toast.success("Item Added To Cart");
    } else {
      toast.warning("Item Already In Cart");
    }
    setTimeout(() => {
      navigate.push("/cart");
    }, 1000);
  };
  return (
    <>
      {/* Section Title */}
      <div className="container mx-auto section-title my-10">
        <span className="text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          محصولات ما
        </span>
        <h1 className="text-5xl font-bold font-bricolage mt-5">
          محصولات پرفروش
        </h1>
      </div>
      {/* Products */}
      <div className="container mx-auto product-wrapper py-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Specian Offer Card */}
        <div className="bg-white border-2 border-yellow-400 p-6 product-banner-wrap rounded-xl flex flex-col items-center justify-center text-center relative">
          <span className="text-xl text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
            پیشنهاد ویژه
          </span>
          <div className="absolute top-4 right-4 bg-yellow-400 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-sm">
            دخیره <br /> 10%
          </div>
          <Image
            width={90}
            height={90}
            src={specialOffer.ProductsImage}
            alt={specialOffer.Name}
            className="w-4/5 mx-auto my-4"
          />
          <h3 className="text-yellow-800 font-semibold">{specialOffer.Name}</h3>
          <div className="mt-2">
            <span className="line-through text-gray-500">
              ${specialOffer.OldPrice}
            </span>
            <span className="text-red-600 text-xl font-bold">
              تومان{specialOffer.Price}
            </span>
          </div>
          <div className="flex justify-between w-full mt-4 text-sm">
            <span>موجودی: 6</span>
            <span>فروش رفته: 27</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1 overflow-hidden">
            <div className="bg-yellow-400 w-1/5 h-full"></div>
          </div>
          <p className="mt-3 text-gray-700 text-sm">
            عجله کنید: پیشنهاد تمام می شود در
          </p>
        </div>
        {/* Products Cards */}
        <div className="lg:col-span-3">
          <div className="grid product-wrap grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.Id}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start hover:shadow-xl transition duration-300 group border border-gray-100 cursor-pointer"
              >
                <p className="text-xs text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
                  {product.Category}
                </p>
                <Image
                  width={90}
                  height={90}
                  src={product.ProductsImage}
                  alt={product.Name}
                  className="w-4/5 h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                  onClick={() => navigate(`/product/${product.Id}`)}
                />
                <h4
                  onClick={() => navigate(`/product/${product.Id}`)}
                  className="text-lg font-medium mt-3 text-yellow-800 hover:underline line-clamp-2"
                >
                  {product.Name}
                </h4>
                <div className="flex mt-5 flex-row items-center justify-between w-full">
                  <div className="mt-1 text-md">
                    <span className="text-lg font-semibold mt-1">
                      تومان {product.Price}
                    </span>
                  </div>
                  <button
                    className="bg-yellow-400 text-white rounded-full w-[45px] h-[45px] hover:bg-red-500 hover:shadow-xl transition"
                    onClick={() => handleAddToCart(product)}
                  >
                    <AiOutlineShoppingCart className="m-auto" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <ToastContainer position="top-right" autoClose={1500} />
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
