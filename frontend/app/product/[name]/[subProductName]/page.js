"use client";
import AllProductsCategory from "@/app/jsFiles/allProducts";
import ReactImageMagnify from "@blacklab/react-image-magnify";
import { useParams } from "next/navigation";
import React from "react";

const ProductView = () => {
  const { name, subProductName } = useParams(); // Get both product and sub-product names from the URL

  // Decode the URL parameters
  const decodedName = decodeURIComponent(name);
  const decodedSubProductName = decodeURIComponent(subProductName);

  console.log(decodedName, decodedSubProductName, 'decoded name and sub');
  
  const selectedProduct = AllProductsCategory.find((product) => product.name === decodedName);
  
  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const subProduct = selectedProduct.products
    ? selectedProduct.products.find((sub) => sub.name === decodedSubProductName)
    : null;

  if (!subProduct) {
    return <div>Sub-product not found</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-10 lg:my-20 px-4">
      <div className="lg:w-4/6 w-full flex flex-col lg:flex-row items-center lg:items-start">
        {/* Product Image */}
        {/* <div className="p-4 border-2 mb-6 lg:mb-0 lg:mr-8 flex justify-center">
          <img
            src={subProduct.imageUrl}
            alt={subProduct.name}
            className="w-64 h-64 lg:w-96 lg:h-96 object-cover"
          />
        </div> */}
        <div className="w-full lg:w-2/6 border p-4  mb-6 lg:mb-0 lg:mr-8 flex justify-center">
                  <ReactImageMagnify
                    imageProps={{
                      alt: subProduct.name,
                      height: 300,
                      src: subProduct.imageUrl,
                      width: 300,
                    }}
                    magnifiedImageProps={{
                      height: 900,
                      src: subProduct.imageUrl,
                      width: 900,
                    }}
                    magnifyContainerProps={{
                      height: 500,
                      width: 600,
                    }}
                    portalProps={{
                      horizontalOffset: 10,
                      id: "portal-test-id",
                    }}
                  />
                </div>

        {/* Product Details */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold ml-0 lg:ml-4">{subProduct.name}</h1>
          <p>{subProduct.description}</p>
        </div>

      </div>
    </div>
  );
};

export default ProductView;
