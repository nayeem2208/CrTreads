import firstProductList from "@/app/jsFiles/firstProductList";
import React from "react";

function SecondHeader() {
  // Slice the first 6 products
  // const firstSlice = firstProductList.slice(0, 6);
  // // Slice the remaining products
  // const slicedProducts = firstProductList.slice(6);

  return (
    <section
      className="lg:p-2 flex flex-col justify-center items-center shadow-md text-gray-800"
      style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="w-full lg:w-5/6 py-4 md:py-2">
        {/* First Row - First 6 Products */}
        <div className="flex justify-start space-x-16 md:space-x-0 overflow-x-auto md:py-6 ">
          <div className="pr-0 md:pr-4 "></div>{" "}
          {/* Padding for better visibility */}
          {firstProductList.map((product, index) => (
            <article
            className="text-center flex flex-col flex-shrink-0 justify-start  items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-red-400 "
            key={index}
            style={{ width: "calc(16.66% - 1rem)" }}
          >
            <figure className="bg-gray-300 hover:bg-red-300 rounded-full w-20 md:w-28 h-20 md:h-28 overflow-hidden p-2 flex items-center transition-transform duration-300 ease-in-out transform ">
              <div className="bg-gray-200 hover:bg-red-200 rounded-full overflow-hidden p-2 flex items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div className="rounded-full overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
              </div>
            </figure>
            <figcaption className="mt-3 text-sm font-medium text-center transition-colors duration-300 ease-in-out hover:text-red-400">
              {product.name}
            </figcaption>
          </article>
          ))}
        </div>
      </div>

      {/* Second Row - Remaining Products */}

    </section>
  );
}

export default SecondHeader;
