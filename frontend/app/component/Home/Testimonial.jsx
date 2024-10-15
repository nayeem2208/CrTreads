import React from "react";

function Testimonial() {
  const testimonials = [
    {
      text: "CR Treads Tyres has become my go-to supplier for all my tire needs, and for good reason. Their range of procured tread rubber products is unmatched, and I always find high-quality options for my vehicles. What impresses me the most is the level of care and attention provided by the customer support team.",
      name: 'Appu Nair',
      rating: 4, // Example rating
    },
    {
      text: "CR Treads Tyres has become my go-to supplier for all my tire needs, and for good reason. Their range of procured tread rubber products is unmatched, and I always find high-quality options for my vehicles. What impresses me the most is the level of care and attention provided by the customer support team.",
      name: 'Nadir Shah',
      rating: 5, // Example rating
    },
    {
      text: "CR Treads Tyres has become my go-to supplier for all my tire needs, and for good reason. Their range of procured tread rubber products is unmatched, and I always find high-quality options for my vehicles. What impresses me the most is the level of care and attention provided by the customer support team.",
      name: 'Anil Chandrasekhar',
      rating: 5, // Example rating
    },
  ];

  return (
    <div
      className="p-4 mt-8 flex justify-center items-center testimonial"
      style={{ height: "auto", minHeight: "50vh" }}
      aria-labelledby="testimonial-title"
    >
      <div className="w-11/12 md:w-full">
        <h2 id="testimonial-title" className="sr-only">Customer Testimonials</h2>
        <p className="text-xl md:text-3xl font-semibold my-12 text-center">
          Our customers love us!
        </p>
        <div className="flex flex-col md:flex-wrap md:flex-row justify-center ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none flex flex-col md:m-6  border border-gray-200 p-8 mb-4 md:mb-0 text-center  text-stone-400 md:max-w-[450px]"
              style={{ width: "100%" }} // Responsive width
            >
              <div className="flex-grow mb-2">
                <p className="text-base font-medium">{testimonial.text}</p>
              </div>
              <p className="text-center font-semibold text-black text-lg">{testimonial.name}</p>
              {/* Star Rating */}
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-yellow-500 text-lg ${starIndex < testimonial.rating ? "★" : "☆"}`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
