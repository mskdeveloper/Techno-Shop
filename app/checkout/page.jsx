"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [cart, setCart] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("bank");
  const [discount, setDiscount] = useState(1000000);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = storedCart.map((item) => ({
      ...item,
      price: parseFloat(item.price),
      quantity: item.quantity || 1,
    }));
    setCart(updatedCart);
  }, []);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = cart.length > 0 ? 1500000 : 0;
  const total = subtotal + shipping - discount;

  const PaymentOtion = ({ id, lable }) => (
    <lable
      htmlFor={id}
      className={`flex items-start gap-3 p-4 border rounded-md cursor-pointer transition-all ${
        selectedPayment === id
          ? "border-yellow-400 bg-yellow-50 shadow-sm"
          : "border-gray-300"
      } `}
    >
      <input
        type="radio"
        id={id}
        name="payment"
        value={id}
        checked={selectedPayment === id}
        onChange={() => setSelectedPayment(id)}
        className="mt-1 w-4 h-4 text-yellow-400 accent-yellow-400"
      />
      <span className="text-sm">{lable}</span>
    </lable>
  );
  return (
    <>
      <div className="min-h-screen px-[8%] lg:px-[12%] py-14 bg-white text-gray-800">
        <h1 className="text-5-xl font-semibold text-center mb-10">صورتحساب</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Billing Section */}
          <div className="lg:-col-span-2 bg-white p-8 border rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">اطلاعات صورتحساب</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <lable
                  className="block text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  نام
                </lable>
                <input
                  type="text"
                  placeholder="نام"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <lable
                  className="block text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  نام خانوادگی
                </lable>
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <lable
                  className="block text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  شرکت
                </lable>
                <input
                  type="text"
                  placeholder="شرکت"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <lable
                  className="block text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  کشور
                </lable>
                <select className="w-full border rounded-md px-4 py-2">
                  <option>Selected Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div>
                <lable
                  className="block text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  آدرس
                </lable>
                <input
                  type="text"
                  placeholder="آدرس"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <lable
                  className="block text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  خیابان
                </lable>
                <input
                  type="text"
                  placeholder="خیابان"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <lable
                  className="block text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  شهر
                </lable>
                <input
                  type="text"
                  placeholder="شهر"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <lable
                  className="block text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  کدپستی
                </lable>
                <input
                  type="text"
                  placeholder="کدپستی"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <lable
                  className="block text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  ایمیل
                </lable>
                <input
                  type="text"
                  placeholder="ایمیل"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <lable
                  className="block text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  تلفن
                </lable>
                <input
                  type="text"
                  placeholder="تلفن"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
            </form>
          </div>
          {/* order summary */}
          <div className="bg-gray-50 p-8 rounded-xl border h-fit shadow-sm">
            <h2 className="text-xl font-semibold mb-6">خلاصه سفارش</h2>
            <div className="space-y-3 text-sm">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <hr className="my-2" />
              <div className="flex justify-between text-gray-500">
                <span>subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>discount</span>
                <span className="text-green-600 ">
                  - ${discount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <PaymentOtion id="bank" lable="پرداخت از طریق درگاه بانکی">
                <div className="text-xs text-gray-600 m-6">
                  پرداخت امن از طریق کلیه کارت های عضو شتاب
                </div>
              </PaymentOtion>
              <PaymentOtion id="cod" lable="پرداخت در محل" />
              <PaymentOtion id="online" lable="پرداخت  آنلاین" />
            </div>
            {/* Terms */}
            <div className="mt-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-yellow-400" required />
                قوانین را خواندم و قبول دارم
              </label>
            </div>
            <button className="mt-6 w-full py-3 bg-yellow-400 hover:bg-yellow-500 ">
              ثبت سفارش
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
