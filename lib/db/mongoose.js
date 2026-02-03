import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

let cached = global.mongoose

if (!cached) {
      cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
      if (cached.conn) {
            return cached.conn
      }

      if (!MONGODB_URI) {
            throw new Error("Please define the MONGODB_URI in environment (Vercel env vars or .env.local)")
      }

      if (!cached.promise) {
            const opts = {
                  bufferCommands: false,
            }
            cached.promise = mongoose.connect(MONGODB_URI, opts).then((m) => m)
      }
      cached.conn = await cached.promise
      return cached.conn
}

export default dbConnect
