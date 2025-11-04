import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { parse } from "postcss";
import { Link } from "react-router";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch wishlist data from an API or local storage
    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedWishlist = wishlist.filter((item) => item.Id !== id);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
        toast.success("Item removed from wishlist");
      }
    });
  };

  const addToCart = (product) => {
    toast.success(`${product.Name} added to cart!`);
  };

  return (
    <>
      <div className="w-full px-4 sm:px-8 py-12 bg-white text-gray-800 lg:px-[12%]">
        <Toaster position="top-right" reverseOrder={false} />

        <h1 className="flex justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 font-bricolage ">
          <AiOutlineHeart className="text-pink-500 mr-2" />
          My Wishlist
        </h1>
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
          </div>
        ) : (
          <div className="overflow-hidden hidden md:block">
            <table className="w-full text-left border-separate border-spacing-y-6">
              <thead>
                <tr className="text-sm text-gray-500 border-b border-gray-200">
                  <th></th>
                  <th className="py-3">Product</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Stock Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((product) => (
                  <tr
                    key={product.Id}
                    className="bg-white border rounded-xl shadow-sm"
                  >
                    <td className="align-middle text-center">
                      <button
                        title="remove"
                        onClick={() => {
                          removeFromWishlist(product.Id);
                        }}
                        className="text-xl text-gray-400 hover:text-red-500 p-3"
                      >
                        <AiOutlineClose />
                      </button>
                    </td>
                    <td className="flex items-center gap-4 py-4 px-2">
                      <img
                        src={product.ProductsImage}
                        alt={product.Name}
                        className="w-24 h-24 object-contain border p-2 rounded-lg"
                      />
                      <h3 className="text-lg font-medium text-gray-900">
                        {product.Name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {product.Category}
                      </p>
                    </td>
                    <td className="text-center text-gray-800 font-semibold text-base">
                      ${parseFloat(product.Price).toFixed(2)}
                    </td>
                    <td className="text-center">
                      <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium">
                        <AiOutlineCheckCircle />
                        In Stock
                      </span>
                    </td>
                    <td className="text-center">
                      <button
                        className="cursor-pointer inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400 text-sm font-semibold hover:bg-yellow-500"
                        onClick={() => {
                          addToCart(product);
                        }}
                      >
                        <AiOutlineShoppingCart />
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-yellow-500 border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition-all"
          >
            Continiue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};
export default Wishlist;
