import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Crousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 20,
    cssEase: "linear",
  };
  return (
    <div className="relative font-serif">
      <div className="slider-container  overflow-hidden m-1 max-h-screen ">
        <Slider {...settings}>
          <div className="m-1 p-1 h-1/3 ">
            <img
              className="h-fit w-full"
              src="https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694097.jpg?t=st=1723547619~exp=1723551219~hmac=076ce12f07c3ba08f0db26fc5a4ab7b60fe4a2ba34390b20c19248337ab4ca83&w=826"
              alt="girl-content"
            ></img>
          </div>
          <div className=" m-1 p-1 h-1/3">
            <img
              className="h-fit w-full"
              src="https://img.freepik.com/premium-photo/indian-house-warming-design_1106939-115554.jpg?w=826"
              alt="girl-content"
            ></img>
          </div>
          <div className="m-1 p-1 h-1/3">
            <img
              className=" w-full"
              src="https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302662.jpg?t=st=1723547792~exp=1723551392~hmac=abeb46dc1b8c9fa377c58659ff823bef1bb67271f899f05fee0a26a5659c1420&w=826"
              alt="girl-content"
            ></img>
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
