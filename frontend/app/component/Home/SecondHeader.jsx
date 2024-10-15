import firstProductList from "@/app/jsFiles/firstProductList";
import React from "react";

function SecondHeader() {
  // Slice the first 6 products
  const firstSlice = firstProductList.slice(0, 6);
  // Slice the remaining products
  const slicedProducts = firstProductList.slice(6);

  return (
    <section
      className="lg:p-4 flex flex-col justify-center items-center shadow-md"
      style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="w-full lg:w-5/6 py-4 md:py-2">
        {/* First Row - First 6 Products */}
        <div className="flex justify-start space-x-16 md:space-x-4 overflow-x-auto">
          <div className="pr-0 md:pr-4 "></div> {/* Padding for better visibility */}
          {firstSlice.map((product, index) => (
            <article className="text-center flex flex-col flex-shrink-0  justify-center items-center" key={index} style={{ width: "calc(16.66% - 1rem)" }}>
            <figure className="bg-gray-500 rounded-full w-16 md:w-28 h-16 md:h-28 overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <figcaption className="mt-3 text-sm md:text-base text-center">
              {product.name}
            </figcaption>
          </article>
          ))}
        </div>
      </div>

      {/* Second Row - Remaining Products */}
      <div className="w-full lg:w-5/6 py-4 md:py-2  md:mt-8">
        <div className="flex justify-start space-x-16 md:space-x-4 overflow-x-auto">
          <div className="pr-0 md:pr-4"></div> {/* Padding for better visibility */}
          {slicedProducts.map((product, index) => (
            <article className="text-center flex flex-col flex-shrink-0  justify-center items-center" key={index} style={{ width: "calc(16.66% - 1rem)" }}>
              <figure className="bg-gray-500 rounded-full w-16 md:w-28 h-16 md:h-28 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <figcaption className="mt-3 text-sm md:text-base text-center">
                {product.name}
              </figcaption>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecondHeader;
