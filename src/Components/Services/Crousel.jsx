import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Crousel() {
  const settings = {
    // dots: true,
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 10000,
    // autoplaySpeed: 20,
    // cssEase: "linear",

    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="relative font-serif">
      <div className="slider-container overflow-hidden  m-1 max-h-screen ">
        <Slider {...settings}>
          <div className="m-1 p-1 flex items-center justify-center Crousel_section">
            <div className=" flex justify-center items-center">
              <div className="w-1/2 h-40 bg-opacity-45 bg-slate-400  rounded-lg shadow-2xl text-white relative top-36">
                <h2 className="text-center text-2xl font-medium mt-8">
                  {" "}
                  Homeownership is the foundation of the American Dream{" "}
                </h2>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="text-gray-900 m-2 w-32 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Sell
                  </button>
                  <button
                    type="button"
                    className="text-white m-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" m-1 p-1  Crousel_section_two">
            <div className=" flex justify-center items-center">
              <div className="w-1/2 h-40  bg-opacity-45 bg-slate-400  rounded-lg shadow-2xl text-white relative top-36">
                <h2 className="text-center text-2xl font-medium mt-8">
                  {" "}
                  Homeownership is the foundation of the American Dream{" "}
                </h2>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="text-gray-900 m-2 w-32 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Sell
                  </button>
                  <button
                    type="button"
                    className="text-white m-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="m-1 p-1  Crousel_section_three">
            <div className=" flex justify-center items-center">
              <div className="w-1/2 h-40  bg-opacity-45 relative top-36 bg-slate-400  rounded-lg shadow-2xl text-white">
                <h2 className="text-center text-2xl font-medium mt-8">
                  {" "}
                  Homeownership is the foundation of the American Dream{" "}
                </h2>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="text-gray-900 m-2 w-32 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Sell
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r m-2 from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* <div className="w-1/2 flex items-center  justify-center bg-white max-h-36 absolute top-3/4 left-1/4  ">
        <div className="w-full font-bold text-5xl text-center  border-dashed   border-2 h-20 m-9 ">
          My Life . My Blog
        </div>
      </div> */}
    </div>
  );
}

export default Crousel;
