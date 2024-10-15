"use client";
import bestSeller from "@/app/jsFiles/BestSeller";
import { useParams } from "next/navigation";
import React from "react";

const BestSellerProductView = () => {
  const { name } = useParams(); // Get both product and sub-product names from the URL

  // Decode the URL parameters
  const decodedName = decodeURIComponent(name);
    
  
  const selectedProduct = bestSeller.find((product) => product.name === decodedName);
  
 console.log(selectedProduct,'selected product')

  return (
    <div className="flex justify-center items-center my-20">
      <div className="w-4/6 flex ">
        <div className="p-4 border-2 mr-8">
          <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-96 h-96" />
        </div>
        <h1 className="text-3xl font-bold ml-4">{selectedProduct.name}</h1>
      </div>
    </div>
  );
};

export default BestSellerProductView;
