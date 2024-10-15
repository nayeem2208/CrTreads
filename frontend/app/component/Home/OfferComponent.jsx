import React from "react";

function OfferComponent() {
  return (
    <div className="flex justify-center bg-stone-50 shadow-inner items-center h-full  pt-12">
      <div className="w-5/6 md:w-4/6">
        {/* First Row: Four Images */}
        <div className="md:flex py-3">
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:mr-3">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="https://tiimg.tistatic.com/fp/1/008/903/precured-cold-tread-rubber-894.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:mx-3">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="https://exhibitorsearch.messefrankfurt.com/images/large/product_pictures/10000007202401/361414/1719540018367_2775766935.JPG"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:mx-3">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqutN5vz-Qoz7HY8JKhnzFSOOBQuXMyu0Wbw&s"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:ml-3">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPfmHLg5jFM5ix6ElzXE0--Y-frAu3ItGqWWWtBRNom9EatGX3nOEvhSgCCxEKkXv_JHo&usqp=CAU"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Row: One Image */}
        <div className="w-full h-4/6 overflow-hidden mt-4 bg-yellow-400">
          <img
            src="https://www.coxmotorparts.co.uk/wp-content/uploads/2022/05/car-tyres.jpg"
            alt=""
            className="w-full h-full object-cover " // Ensure the image fills the container
          />
        </div>
      </div>
    </div>
  );
}

export default OfferComponent;
