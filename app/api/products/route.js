import dbConnect from "../../../lib/db/mongoose"
import Product from "../../../models/Product"

export async function GET() {
      await dbConnect()
      const products = await Product.find().lean()
      return new Response(JSON.stringify(products), {
            headers: { "Content-Type": "application/json" },
      })
}

export async function POST(request) {
      await dbConnect()
      const body = await request.json()
      const created = await Product.create(body)
      return new Response(JSON.stringify(created), { status: 201 })
}
