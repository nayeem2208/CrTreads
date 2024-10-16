import firstProductList from "@/app/jsFiles/firstProductList";
import Link from "next/link";
import React from "react";

function SecondHeader() {
  return (
    <section
      className="pl-2 lg:p-2 flex flex-col justify-center items-center shadow-md text-gray-800 font-semibold text-center"
      style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="w-full lg:w-5/6 xl:w-8/12 py-4 md:py-2">
        {/* First Row - First 6 Products */}
        <div className="flex justify-start space-x-10 md:space-x-12 overflow-x-auto md:py-6">
          <article
            className="text-center flex flex-col flex-shrink-0 justify-start items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-red-400"
          >
            <figure className="bg-gray-300 hover:bg-red-300 rounded-full w-20 md:w-28 h-20 md:h-28 flex items-center justify-center transition-transform duration-300 ease-in-out transform">
              <div className="rounded-full">
                <img
                  src="https://dms.mydukaan.io/original/webp/media/c74f22ef-eaa2-404b-832c-7d43fc0c8d86.gif"
                  alt="sale image"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
            </figure>
            <figcaption className="mt-3 text-sm text-center transition-colors duration-300 ease-in-out hover:text-red-400">
              Offer Zone
            </figcaption>
          </article>

          {/* Padding for better visibility */}
          {firstProductList.map((product, index) => (
            <article
              className="text-center flex flex-col w-28  justify-start items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-red-400"
              key={index}
            >
              <figure className="bg-gray-300 hover:bg-red-300 rounded-full w-20 md:w-28 h-20 md:h-28 overflow-hidden p-2 flex items-center justify-center transition-transform duration-300 ease-in-out transform">
                <div className="bg-gray-200 hover:bg-red-200 rounded-full overflow-hidden p-2 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <div className="rounded-full overflow-hidden">
                    <Link href={{ pathname: '/products', query: { data: JSON.stringify(product.name) } }}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                    </Link>
                  </div>
                </div>
              </figure>
              <div className="flex justify-center items-center w-full  mt-3 text-sm text-center py-2 transition-colors duration-300 ease-in-out hover:text-red-400">
                {product.name}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Second Row - Remaining Products */}
    </section>
  );
}

export default SecondHeader;
