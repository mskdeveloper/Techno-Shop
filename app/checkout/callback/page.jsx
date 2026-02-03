"use client";
import React, { useEffect, useState } from "react";

const CallbackPage = () => {
  const [status, setStatus] = useState("در حال بررسی تراکنش...");
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const trackId = params.get("trackId") || params.get("trackid") || params.get("track_id");
    const token = params.get("token") || params.get("tokenId") || params.get("tokenid");
    const orderId = params.get("orderId") || params.get("orderid");

    if (!trackId && !token) {
      setStatus("پارامترهای تراکنش یافت نشدند.");
      return;
    }

    fetch("/api/zibal/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trackId, token, orderId }),
    })
      .then((r) => r.json())
      .then((data) => {
        setDetails(data);
        // Zibal معمولاً یک کد نتیجه یا فیلد مشخص برای موفقیت دارد.
        // اینجا به صورت کلی بررسی می‌کنیم.
        if (data && (data.result === 1 || data.success)) {
          setStatus("پرداخت موفق بود. متشکریم!");
        } else {
          setStatus("پرداخت ناموفق بود یا نیاز به بررسی دارد.");
        }
      })
      .catch((e) => setStatus("خطا در تایید تراکنش: " + e.message));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl w-full bg-white p-8 rounded shadow">
        <h1 className="text-lg font-semibold mb-4">نتیجه پرداخت</h1>
        <p className="mb-4">{status}</p>
        {details && (
          <pre className="text-xs bg-gray-50 p-3 rounded max-h-64 overflow-auto">{JSON.stringify(details, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};

export default CallbackPage;
