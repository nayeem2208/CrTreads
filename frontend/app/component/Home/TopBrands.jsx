'use client'
import React, { useEffect, useRef } from "react";
import tyreBrands from "@/app/jsFiles/topBrands";

function ShopFromTopBrands() {
  const brandContainerRef = useRef(null);

  useEffect(() => {
    const container = brandContainerRef.current;
    const scrollSpeed = 0.7; // Adjust the speed as needed

    // Set up keyframes for the scroll animation
    const keyframes = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${container.scrollWidth / 2}px); }
      }
    `;

    // Add keyframes to the stylesheet
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    // Set up animation on the brand logos container
    container.style.animation = `scroll ${container.scrollWidth / (scrollSpeed * 100)}s linear infinite`;

    return () => {
      container.style.animation = '';
    };
  }, []);

  return (
    <section
      aria-label="Shop from Top Brands"
      className="lg:p-4 flex flex-col justify-center bg-stone-100 h-64 md:h-96 text-left items-center shadow-inner"
    >
      {/* Section heading */}
      <div className="  lg:w-9/12 w-11/12 mb-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black ">TOP BRANDS</h2>
      </div>
      {/* Scrolling brand logos */}
      <div className="overflow-hidden no-scrollbar lg:w-9/12 w-11/12 text-gray-800">
        <div className="flex space-x-12 lg:space-x-7" ref={brandContainerRef}>
          {tyreBrands.concat(tyreBrands).map((product, index) => (
            <article className="text-center hover:text-red-400" key={index}>
              <figure className="bg-gray-300 rounded-full w-20 md:w-28 h-20 md:h-28 overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-400 hover:shadow-md hover:shadow-red-200">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                  loading="lazy"
                />
              </figure>
              <figcaption className="mt-3 text-sm font-medium md:font-semibold text-center transition-colors duration-300 ease-in-out hover:text-red-400">
                {product.name}
              </figcaption>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopFromTopBrands;
