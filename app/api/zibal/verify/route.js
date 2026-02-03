import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { trackId, token, orderId } = await req.json();

    const merchant = process.env.ZIBAL_MERCHANT_KEY;
    if (!merchant)
      return NextResponse.json({ ok: false, error: "Merchant key not configured" }, { status: 500 });

    const body = { merchant };
    if (trackId) body.trackId = trackId;
    if (token) body.token = token;

    const resp = await fetch("https://gateway.zibal.ir/v1/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await resp.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
