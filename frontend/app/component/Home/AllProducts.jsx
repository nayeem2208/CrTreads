"use client";
import AllProductsCategory from "@/app/jsFiles/allProducts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function AllProductsHome() {


    return (
        <div className="pt-8 flex justify-center items-center bg-stone-100">
            <div className="w-11/12 lg:w-9/12">
                <p className="text-xl md:text-2xl font-semibold mb-6 text-gray-900 lg:mt-12">ALL PRODUCTS</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-6 py-8">
                    {AllProductsCategory.map((product, index) => (
                 <Link key={index} href={{ pathname: '/products', query: { data: JSON.stringify(product.name) } }}> 
                        <div
                            
                            className="w-full h-56 md:h-80 flex-none mt-6 flex flex-col cursor-pointer shadow-xl overflow-hidden rounded-lg"
                        
                        >
                            <div className="rounded-t-lg overflow-hidden h-4/6  flex-grow transition-transform duration-300 transform hover:scale-105">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="my-4 text-center">{product.name}</p>
                            <button
                                type="submit"
                                className="text-white flex justify-center gap-3 w-full items-center mx-auto text-lg bg-black backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-gray-600 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden group"
                            >
                                Enquire
                                <svg
                                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-white ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                                    viewBox="0 0 16 19"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                        className="fill-white group-hover:fill-gray-600"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                            </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllProductsHome;
