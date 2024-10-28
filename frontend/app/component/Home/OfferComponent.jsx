import React from "react";

function OfferComponent() {
  return (
    <div className="flex justify-center bg-stone-50 shadow-inner items-center h-full pt-12  lg:pt-20">
      <div className="w-5/6 md:w-4/6">
        {/* First Row: Four Images */}
        <div className="md:flex py-3">
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:mr-3">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="https://i.pinimg.com/originals/29/a8/e5/29a8e57b8b799151ffdf9bc7ceca9db2.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:mx-3">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1675032314301-400d9898183d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:mx-3">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1673208484517-deeab27359b4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:ml-3">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1664298128120-d2284204dbda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
