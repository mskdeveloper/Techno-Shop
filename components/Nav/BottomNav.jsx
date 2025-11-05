"use client";
import React, { useState } from "react";
import { AiOutlineFire, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  FcPhoneAndroid,
  FcFrame,
  FcCamera,
  FcHeadset,
  FcIpad,
  FcSelfServiceKiosk,
} from "react-icons/fc";
import Link from "next/link";

const BottomNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [open, setOpen] = useState(false);

  const categories = [
    ["موبایل", <FcPhoneAndroid />],
    ["لپ تاپ", <FcFrame />],
    ["دوربین", <FcCamera />],
    ["هدفون", <FcHeadset />],
    ["کنسول", <FcIpad />],
    ["دسته کنسول", <FcSelfServiceKiosk />],
  ];
  return (
    <>
      <div
        className={`container w-full  py-6 flex justify-between items-center gap-6 transition-all duration-500 mt-3 ${
          menuOpen ? "h-auto" : ""
        }`}
      >
        <div className="relative w-1/5 hide">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center gap-2">
              <span className="font-bold">دسته بندی محصولات</span>
              <span className="text-xl">
                <AiOutlineMenu />
              </span>
            </div>
          </div>
          {open && (
            <ul className="absolute top-full left-0 bg-white shadow-md rounded-md overflow-hidden mt-2 w-full z-40 transition-all duration-300">
              {categories.map(([lable, icon], i) => (
                <a
                  href="#"
                  key={i}
                  className="flex items-center gap-3 px-4 py-2 border-b last:border-none border-gray-300 hover:bg-gray-100 transition ease-in-out duration-300"
                >
                  <span className="ml-3">{icon}</span>
                  <span>{lable}</span>
                </a>
              ))}
            </ul>
          )}
        </div>
        <ul className="flex gap-8 w-2/5 nav-menu font-bold">
          <li>
            <Link href="/" className="hover:text-yellow-500 text-xl transition">
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-yellow-500 text-xl transition"
            >
              درباره ما
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="hover:text-yellow-500 text-xl transition"
            >
              فروشگاه
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-yellow-500 text-xl transition"
            >
              وبلاگ
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="hover:text-yellow-500 text-xl transition"
            >
              سوالات
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-yellow-500 text-xl transition"
            >
              ارتباط با ما
            </Link>
          </li>
        </ul>
        <Link href="/wishlist" className="flex items-center gap-3 hide">
          <span className="text-2xl text-gray-600 ">
            <AiOutlineFire />
          </span>
          <div className="flex items-cente gap-2">
            <span className="font-bold text-sm">تخفیف امروز</span>
            <span className="bg-red-600 text-white text-xs px-2 pt-1 rounded-sm uppercase relative">
              داغ
            </span>
          </div>
        </Link>
        {menuOpen && (
          <span
            onClick={toggleMenu}
            className="text-2xl absolute top-4 right-4 cursor-pointer"
          >
            <AiOutlineClose />
          </span>
        )}
      </div>
    </>
  );
};

export default BottomNav;
