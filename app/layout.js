import { Vazirmatn } from "next/font/google"
import "./globals.css"
import Nav from "@/components/Nav/Nav"
import Footer from "@/components/Footer/Footer"

const vazirmatn = Vazirmatn({
      variable: "--font-Vazirmatn",
      subsets: ["arabic", "latin"], // اضافه کردن 'arabic' برای پشتیبانی فارسی
      weight: ["300", "400", "500", "700"],
      display: "swap",
})

export const metadata = {
      title: "فروشگاه الکترونیک تکنو",
      description: "عرضه کنسول و لوازم جانبی",
}
// {`${geistSans.variable} ${geistMono.variable} antialiased`}
export default function RootLayout({ children }) {
      return (
            <html lang="fa" dir="rtl">
                  <head>
                        <meta name="enamad" content="30473059" />
                  </head>

                  <body className={`${vazirmatn.variable} antialiased`}>
                        <Nav />
                        {children}
                        <Footer />
                  </body>
            </html>
      )
}
