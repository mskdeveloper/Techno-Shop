import Image from "next/image"
import React from "react"

const Footer = () => {
      return (
            <>
                  <div className="w-full h-12 bg-gray-800">
                        <a
                              referrerpolicy="origin"
                              target="_blank"
                              href="https://trustseal.enamad.ir/?id=5738229&Code=e7O3QQhjJbYa4A5MUDPkEQAuIyf8HVWR"
                        >
                              <Image
                                    referrerpolicy="origin"
                                    src="https://trustseal.enamad.ir/logo.aspx?id=5738229&Code=e7O3QQhjJbYa4A5MUDPkEQAuIyf8HVWR"
                                    alt=""
                                    style="cursor:pointer"
                                    code="e7O3QQhjJbYa4A5MUDPkEQAuIyf8HVWR"
                              />
                        </a>
                        <h2 className="text-white flex justify-center items-center h-full">
                              تمامی حقوق این فروشگاه متعلق به تکنوشاپ می باشد.
                        </h2>
                  </div>
            </>
      )
}

export default Footer
