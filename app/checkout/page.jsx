"use client";
import React, { useEffect, useState } from "react";
import PaymentOption from "./PaymentOption";

const page = () => {
  const [cart, setCart] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("bank");
  const [discount, setDiscount] = useState(1000000);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log("storedCart:", storedCart); // برای بررسی شکل داده‌ها

    const updatedCart = storedCart.map((item) => {
      const rawPrice = item?.Price ?? 0;
      // فقط اعداد، ممیز و منفی را نگه دار
      const cleaned = String(rawPrice).replace(/[^\d.-]/g, "");
      const parsedPrice = cleaned === "" ? 0 : parseFloat(cleaned);
      const price = Number.isFinite(parsedPrice) ? parsedPrice : 0;
      const quantity = Number(item?.quantity) || 1;
      return { ...item, price, quantity };
    });

    setCart(updatedCart);
  }, []);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = cart.length > 0 ? 1500000 : 0;
  const total = subtotal + shipping - discount;

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
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  نام
                </label>
                <input
                  type="text"
                  placeholder="نام"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="lastName"
                >
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="company"
                >
                  شرکت
                </label>
                <input
                  type="text"
                  placeholder="شرکت"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="country"
                >
                  کشور
                </label>
                <select className="w-full border rounded-md px-4 py-2">
                  <option>Selected Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="address"
                >
                  آدرس
                </label>
                <input
                  type="text"
                  placeholder="آدرس"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="street"
                >
                  خیابان
                </label>
                <input
                  type="text"
                  placeholder="خیابان"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="city"
                >
                  شهر
                </label>
                <input
                  type="text"
                  placeholder="شهر"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="postal"
                >
                  کدپستی
                </label>
                <input
                  type="text"
                  placeholder="کدپستی"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  ایمیل
                </label>
                <input
                  type="email"
                  placeholder="ایمیل"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="phone"
                >
                  تلفن
                </label>
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
                    {item.Name} x {item.quantity}
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
              <PaymentOption
                id="bank"
                label="پرداخت از طریق درگاه بانکی"
                selectedPayment={selectedPayment}
                setSelectedPayment={setSelectedPayment}
              >
                <div className="text-xs text-gray-600 m-6">
                  پرداخت امن از طریق کلیه کارت های عضو شتاب
                </div>
              </PaymentOption>
              <PaymentOption
                id="cod"
                label="پرداخت در محل"
                selectedPayment={selectedPayment}
                setSelectedPayment={setSelectedPayment}
              />
              <PaymentOption
                id="online"
                label="پرداخت آنلاین"
                selectedPayment={selectedPayment}
                setSelectedPayment={setSelectedPayment}
              />
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
