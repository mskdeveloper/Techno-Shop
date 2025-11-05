import React from "react";
import {
  AiFillCaretDown,
  AiOutlineThunderbolt,
  AiOutlineUser,
  AiOutlineSend,
} from "react-icons/ai";
import Link from "next/link";

const TopNav = () => {
  return (
    <>
      <div className="top-nav w-full flex justify-between items-center bg-gray-800 text-white px-[2%] lg:px-[12%] py-3 text-sm">
        <div className="flex w-1/2 gap-5 items-center">
          <p className="hide font-light">
            ارسال رایگان محصولات برای خرید بالای 7 میلیون تومان
          </p>
        </div>
        <ul className="flex gap-3 md:gap-5 w1/2 justify-end items-center">
          <li className="text-yellow-400 flex items-center gap-1">
            <AiOutlineThunderbolt />
            <a href="$">فروش فوق العاده</a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-1 items-center hover:text-yellow-400 transition"
            >
              <AiOutlineUser />
              ورود به حساب کاربری
            </a>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex gap-1 items-center hover:text-yellow-400 transition"
            >
              <AiOutlineSend />
              ارتباط با ما
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopNav;
