"use client";
import bestSeller from "@/app/jsFiles/BestSeller";
import { useRouter } from "next/navigation";
import React from "react";

function BestSellers() {
  const router = useRouter();

  const handleCardClick = (productName) => {
    // Navigate to the product view page with the product name
    router.push(`/bestSellerSingleView/${encodeURIComponent(productName)}`);
  };

  return (
    <div className="p-4 mt-8 flex justify-center items-center" style={{ height: '50vh' }}>
      <div className="w-11/12 lg:w-9/12">
        <p className="text-xl md:text-2xl font-semibold mb-6">Best Seller</p>
        {/* Enable horizontal scrolling */}
        <div className="flex overflow-x-auto space-x-6 md:space-x-16 py-3">
          {/* Map over bestSeller array */}
          {bestSeller.map((product, index) => (
            <div
              key={index}
              className="w-44 md:w-64 h-72 md:h-80 flex-none flex flex-col cursor-pointer"
              onClick={() => handleCardClick(product.name)} // Pass product name to the click handler
            >
              <div className="rounded-t-lg overflow-hidden flex-grow">
                <img
                  src={product.imageUrl} // Use the product image from the array
                  alt={product.name} // Use the product name for the alt attribute
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="my-4 text-center">{product.name}</p> {/* Use the product name */}
              <button className="bg-black text-white w-full font-semibold text-lg rounded-b-lg h-12">
                ENQUIRE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
