import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { amount, orderId, description, mobile } = await req.json();

    const merchant = process.env.ZIBAL_MERCHANT_KEY;
    if (!merchant)
      return NextResponse.json({ ok: false, error: "Merchant key not configured" }, { status: 500 });

    const callbackBase = process.env.BASE_URL || "http://localhost:3000";
    const callbackUrl = `${callbackBase}/checkout/callback?orderId=${encodeURIComponent(orderId || "")}`;

    const resp = await fetch("https://gateway.zibal.ir/v1/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ merchant, amount, callbackUrl, description, mobile }),
    });

    const data = await resp.json();

    // return raw response from zibal to the frontend so it can redirect
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
