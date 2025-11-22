"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const fixedCart = storedCart.map((item) => {
      const raw = item.price ?? item.Price ?? 0;
      const price = parseFloat(String(raw).replace(/[^0-9.-]+/g, "")) || 0;
      return {
        ...item,
        price,
        quantity: item.quantity ?? item.Quantity ?? 1,
        Id: item.Id,
      };
    });
    setCart(fixedCart);
  }, []);
  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.Id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this item from the cart?"
    );
    if (!confirmRemove) return;
    const updatedCart = cart.filter((item) => item.Id !== id);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.success("Item removed from cart");
  };

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toLowerCase();
    if (code === "freeship99") {
      setDiscount(10);
      toast.success("Coupon applied! You got a $10 discount.");
    } else {
      setDiscount(0);
      toast.error("Invalid coupon code.");
    }
  };

  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = cart.length ? 30000000 : 0;
  const discountAmount = (subTotal * discount) / 100;
  const total = subTotal + shipping - discountAmount;

  const navigate = useRouter();

  const handlePlaceOrder = () => {
    navigate.push("/checkout");
  };
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-[12%] py-12  bg-gray-50 text-gray-800 min-h-screen">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-600 font-bricolage">
          سبد خرید من
        </h1>
        <ToastContainer position="top-right" autoClose={1500} />
        {/* Desktop View */}
        <div className="hidden md:block overflow-x-hidden">
          <table className="w-full text-left border-seperate border-spacing-y-6">
            <thead>
              <tr className="text-sm text-gray-500 border-b border-gray-200">
                <th></th>
                <th>محصول</th>
                <th className="text-center">قیمت</th>
                <th className="text-center">تعداد</th>
                <th className="text-center">کل</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  className="bg-white border rounded-xl shadow-sm border-gray-300"
                  key={item.Id}
                >
                  <td className="text-center">
                    <button
                      onClick={() => removeFromCart(item.Id)}
                      className="text-xl text-gray-400 hover:text-red-500"
                    >
                      <AiOutlineClose />
                    </button>
                  </td>
                  <td className="flex items-center gap-4 py-4 px-2 ">
                    <img
                      src={item.ProductsImage}
                      alt=""
                      className="w-24 h-24 object-contain border p-2 rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.Name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.Category}</p>
                    </div>
                  </td>
                  <td className="text-center text-gray-800 font-medium">
                    ${(item.price ?? 0).toFixed(2)}
                  </td>
                  <td className="text-center">
                    <div className="inline-flex items-center border rounded overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.Id, -1)}
                        className="px-3 py-1 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="px-4 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.Id, 1)}
                        className="px-3 py-1 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-center font-semibold text-gray-800 ">
                    تومان{(item.Price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
              {cart.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-500">
                    سبد خرید شما خالی است.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Mobile Card View */}
        <div className="md:hidden space-y-6">
          {cart.map((item) => (
            <div
              key={item.Id}
              className="bg-white rounded-xl p-4 shadow border"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">{item.Name}</h3>
                <button
                  onClick={() => removeFromCart(item.Id)}
                  className="text-xl text-gray-400 hover:text-red-500"
                >
                  <AiOutlineClose />
                </button>
              </div>
              <img
                src={item.ProductsImage}
                alt={item.Name}
                className="w-full h-40 rounded-xl object-contain"
              />
              <p className="text-sm text-gray-500">{item.Category}</p>

              <p className="text-base font-medium text-gray-800 ">
                قیمت: تومان{(item.price ?? 0).toFixed(2)}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center border rounded">
                  <button onClick={() => updateQuantity(item.Id, -1)}>-</button>
                  <span className="px-4 font-medium">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.Id, 1)}>+</button>
                </div>
                <div className="font-semibold text-gray-800">
                  کل: تومان{(item.Price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Coupon section */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-1/2 flex">
            <input
              type="text"
              placeholder="کد تخفیف ..."
              value={couponCode}
              onChange={(e) => {
                setCouponCode(e.target.value);
              }}
              className="border px-4 w-full rounded-r-md outline-none text-gray-700"
            />

            <button
              onClick={handleApplyCoupon}
              className="bg-gray-800 text-white px-6 py-2 rounded-l-md hover:bg-red-500 transition "
            >
              اعمال کد تخفیف
            </button>
          </div>
        </div>
        {/* Cart Totals */}
        <div className="mt-12 md:w-1/3 ml-auto border rounded-lg p-6 shadow bg-white">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            کل سبد خرید
          </h3>

          <div className="flex justify-between mb-2">
            <span className="text-gray-600">کل</span>
            <span className="font-medium"> تومان{subTotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between mb-2 text-green-600 font-medium">
              <span className="text-gray-600">تخفیف ({discount}%)</span>
              <span className="font-medium">
                -تومان {discountAmount.toFixed(2)}
              </span>
            </div>
          )}
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">باربری</span>
            <span className="font-medium"> تومان{shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 font-bold text-xl border-t pt-4 mt-4">
            <span className="text-gray-800">کل</span>
            <span className="font-semibold"> تومان{total.toFixed(2)}</span>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold transition"
          >
            ثبت سفارش
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
