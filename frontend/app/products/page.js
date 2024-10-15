"use client";
import { useEffect, useState } from "react";
import ProductsSidebar from "../component/productsSidebar";
import AllProductsCategory from "../jsFiles/allProducts";
import { useRouter } from "next/navigation";
import ReactImageMagnify from "@blacklab/react-image-magnify";

function AllProducts() {
  const [selectedProduct, setSelectedProduct] = useState(AllProductsCategory[0]);
  const router = useRouter();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleCardClick = (selectedProductName, subProductName) => {
    router.push(
      `/product/${encodeURIComponent(selectedProductName)}/${encodeURIComponent(
        subProductName
      )}`
    );
  };

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
  };

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex flex-col lg:flex-row pt-10">
      {/* Toggle Button for Small Screens */}
      <div className="lg:hidden mb-4 text-center">
        <button
          onClick={toggleSidebarVisibility}
          className="p-2 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600 transition duration-300"
        >
          {isSidebarVisible ? "Hide Categories" : "Show Categories"}
        </button>
      </div>

      {/* Sidebar */}
      <ProductsSidebar
        onProductSelect={handleProductSelection}
        selected={selectedProduct}
        isVisible={isSidebarVisible}
        toggleVisibility={toggleSidebarVisibility}
      />

      {/* Main Content */}
      <div className="flex-1 p-4 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-6 text-center">All Products</h1>

        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl mb-6 text-center">{selectedProduct.name}</h2>

          {selectedProduct.products ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {selectedProduct.products.map((subProduct, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleCardClick(selectedProduct.name, subProduct.name)
                  }
                  className="p-4 w-full sm:w-64 lg:w-62 xl:w-56 2xl:w-72 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200 cursor-pointer"
                >
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={subProduct.imageUrl}
                      alt={subProduct.name}
                      className="w-full h-48 object-cover transition duration-300 transform hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{subProduct.name}</h3>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center h-full w-full lg:w-5/6 px-4 py-6 shadow-lg">
              {/* Display Large View of the Product without Sub-Products */}
              <div className="lg:flex rounded w-full">
                <div className="w-full lg:w-2/6 border p-4 flex justify-center">
                  <ReactImageMagnify
                    imageProps={{
                      alt: selectedProduct.name,
                      height: 300,
                      src: selectedProduct.imageUrl,
                      width: 300,
                    }}
                    magnifiedImageProps={{
                      height: 900,
                      src: selectedProduct.imageUrl,
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
                <div className="lg:w-3/6 p-4 h-auto lg:ml-12">
                  <p className="mb-4 text-left text-lg">{selectedProduct.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
