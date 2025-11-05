import Link from "next/link";
import {
  AiOutlinePhone,
  AiOutlineFire,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const MiddleNav = () => {
  return (
    <>
      <div className="middle-nav container mt-2 w-full flex justify-between items-center py-6 gap-10">
        <div className="w-1/5">
          <Link href="/">
            <h2 className="flex text-5xl text-black font-bold">
              تکنو <span className="text-yellow-500">شاپ</span>
            </h2>
          </Link>
        </div>
        <div className="product-search flex items-center h-14 border-4 border-yellow-500 rounded-md w-1/2 overflow-hidden">
          <select className="bg-gray-100 font-semibold p-2 w-1/3 border-none outline-none">
            <option hidden>دسته بندی ها</option>
            <option>کنسول</option>
            <option>دسته کنسول</option>
            <option>هدفون</option>
            <option>هلی شات</option>
          </select>
          <input
            type="text"
            placeholder="جستجوی محصول ..."
            className="w-full px-3 py-2 outline-none font-medium bg-gray-100"
          />
          <button className="bg-yellow-500 text-white px-5 font-bold uppercase h-full">
            جستجو
          </button>
        </div>
        <div className="get-help flex gap-5 items-center w-1/3 justify-end">
          <div className="flex gap-2 items-center">
            <span className="text-3xl text-gray-500">
              <AiOutlinePhone />
            </span>
            <div className="flex flex-col texr-sm">
              <span className="text-gray-500">سوالی دارید؟</span>
              <span className="text-yellow-600 font-bold">09176448221</span>
            </div>
          </div>
          <Link href="/wishlist" className="flex gap-2 items-center">
            <span className="text-3xl text-gray-500">
              <AiOutlineFire />
            </span>
            <div className="flex flex-col text-sm">
              {/* <span className="text-gray-500">My</span> */}
              <span className="text-yellow-600 font-bold">ذخیره ها</span>
            </div>
          </Link>
          <Link href="/cart" className="flex gap-2 items-center">
            <span className="text-3xl text-gray-500">
              <AiOutlineShoppingCart />
            </span>
            <div className="flex flex-col text-sm">
              {/* <span className="text-gray-500">My</span> */}
              <span className="text-yellow-600 font-bold">سبد خرید</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MiddleNav;
