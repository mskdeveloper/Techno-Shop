"use client";
import React from "react";

const PaymentOption = ({
  id,
  label,
  selectedPayment,
  setSelectedPayment,
  children,
}) => {
  return (
    <label
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
      <div className="flex-1">
        <span className="text-sm">{label}</span>
        {children}
      </div>
    </label>
  );
};

export default PaymentOption;
