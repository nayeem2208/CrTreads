'use client'
import OfferImages from "@/app/jsFiles/OfferImages";
import React, { useEffect, useState } from "react";

function OfferComponent() {
  const [randomOne, setRandomNumberOne] = useState(0);
  const [randomTwo, setRandomNumberTwo] = useState(0);
  const [randomThree, setRandomNumberThree] = useState(0);
  const [randomFour, setRandomNumberFour] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const random = Math.floor(Math.random() * 4);
      setRandomNumberOne(random);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const random = Math.floor(Math.random() * 4);
      setRandomNumberTwo(random);
    }, 3000);

    const initialDelay = setTimeout(() => {
      setRandomNumberTwo(Math.floor(Math.random() * 4));
    }, 200);

    return () => {
      clearInterval(intervalId);
      clearTimeout(initialDelay);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const random = Math.floor(Math.random() * 4);
      setRandomNumberThree(random);
    }, 3000);

    const initialDelay = setTimeout(() => {
      setRandomNumberThree(Math.floor(Math.random() * 4));
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearTimeout(initialDelay);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const random = Math.floor(Math.random() * 4);
      setRandomNumberFour(random);
    }, 3000);

    const initialDelay = setTimeout(() => {
      setRandomNumberFour(Math.floor(Math.random() * 4));
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(initialDelay);
    };
  }, []);
  return (
    <div className="flex justify-center bg-stone-50 shadow-inner items-center h-full pt-12  lg:pt-20">
      <div className="w-5/6 md:w-4/6">
        {/* First Row: Four Images */}
        <div className="md:flex py-3">
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:mr-3">
            <div className="h-48 w-full overflow-hidden">
              <img
                src={OfferImages[0][randomOne]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:mx-3">
            <div className="h-48 w-full overflow-hidden">
              <img
                src={OfferImages[1][randomTwo]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:mx-3">
            <div className="h-48 w-full overflow-hidden">
              <img
                src={OfferImages[2][randomThree]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:ml-3">
            <div className="h-48 w-full overflow-hidden">
              <img
                src={OfferImages[3][randomFour]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Row: One Image */}
        <div className="w-full h-4/6 overflow-hidden mt-4 bg-yellow-400">
          {/* <img
            src="https://www.coxmotorparts.co.uk/wp-content/uploads/2022/05/car-tyres.jpg"
            alt=""
            className="w-full h-full object-cover " // Ensure the image fills the container
          /> */}
          <video
            src="/SecondVideo.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover filter contrast-125 brightness-110"
            loading="lazy"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default OfferComponent;
