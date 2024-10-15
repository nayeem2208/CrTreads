import tyreBrands from "@/app/jsFiles/topBrands";
import React from "react";

function ShopFromTopBrands() {
  return (
    <section
      aria-label="Shop from Top Brands"
      className="lg:p-4 flex justify-center bg-stone-100 h-72 md:h-96 items-center shadow-inner"
    >
      <div className="overflow-x-auto lg:w-9/12 w-11/12">
        {/* Section heading */}
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">
          Top Brands
        </h2>

        {/* Brand logos */}
        <div className="flex justify-between space-x-12 lg:space-x-7">
          {tyreBrands.map((product, index) => (
            <article className="text-center hover:text-red-400 " key={index}>
              <figure className="bg-gray-300 rounded-full w-20 md:w-28 h-20 md:h-28 overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-400 hover:shadow-md hover:shadow-red-200 ">
                <img
                  src={product.imageUrl}
                  alt={product.name} // Descriptive alt text for SEO and accessibility
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                  loading="lazy" // Lazy load images for performance
                />
              </figure>
              <figcaption className="mt-3 text-sm font-medium text-center transition-colors duration-300 ease-in-out hover:text-red-400">
                {product.name}
              </figcaption> {/* Customize brand name */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopFromTopBrands;
