import React from "react";
import { Link } from "react-router-dom";
import Propertycard from "./Propertycard";

function Collection() {
  return (
    <div className="">
      <div className=" w-full mt-20 mb-20">
        <h2 className="text-center text-4xl font-medium p-5">
          Our Delivered Projects
        </h2>
        <Propertycard />
      </div>
      <div className=" w-full mt-20 mb-20">
        <h2 className="text-center text-4xl font-medium p-5">
          Our current Projects
        </h2>
        <div className="w-full  ">
          <div className=" flex flex-wrap gap-2 justify-center cursor-pointer">
            <Link to="/">
              {" "}
              <img
                className="w-72 h-72 cursor-pointer"
                src="https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694144.jpg?t=st=1723549683~exp=1723553283~hmac=1abd38d5c4f653672b2bf58c5df568735c5ecabd469cd76098143bf4a9ca955b&w=826"
                alt="img1"
              ></img>
              <h2 className="text-center text-2xl font-semibold">
                {" "}
                Project House one
              </h2>
            </Link>
            <Link to="/">
              <img
                className="w-72  h-72 cursor-pointer"
                src="https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302613.jpg?t=st=1723549836~exp=1723553436~hmac=3fec87e2990a9d596a2560e18a050bde06bd05c7d070554a00be87d3178a1595&w=826"
                alt="img2"
              ></img>
              <h2 className="text-center text-2xl font-semibold">
                {" "}
                Project House two
              </h2>
            </Link>
            <Link to="/">
              <img
                className="w-72 h-72 cursor-pointer"
                src="https://img.freepik.com/premium-photo/house-with-pool-palm-tree-background_1078211-501254.jpg?w=740"
                alt="img3"
              ></img>
              <h2 className="text-center text-2xl font-semibold">
                {" "}
                Project House three
              </h2>
            </Link>
            <Link to="/">
              <img
                className="w-72 h-72 cursor-pointer"
                src="https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302660.jpg?t=st=1723549314~exp=1723552914~hmac=7afa057dc54f4f071ef1fe37e1e5969bd24fda3d6863906b53403fc506dd4a0b&w=826"
                alt="img4"
              ></img>
              <h2 className="text-center text-2xl font-semibold">
                {" "}
                Project House four
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full mt-20 mb-20">
        <h2 className="text-center text-4xl font-medium p-5">
          Our Future Projects
        </h2>
        <div className="w-full  ">
          <div className=" flex flex-wrap gap-2 justify-center cursor-pointer">
            <Link to="/">
              <img
                className="w-72 h-72 cursor-pointer"
                src="https://img.freepik.com/premium-photo/house-with-pool-palm-tree-background_1078211-501254.jpg?w=740"
                alt="img3"
              ></img>
              <h2 className="text-center text-2xl font-semibold">
                {" "}
                Project House three
              </h2>
            </Link>
            <Link to="/">
              <img
                className="w-72 h-72 cursor-pointer"
                src="https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302660.jpg?t=st=1723549314~exp=1723552914~hmac=7afa057dc54f4f071ef1fe37e1e5969bd24fda3d6863906b53403fc506dd4a0b&w=826"
                alt="img4"
              ></img>
              <h2 className="text-center text-2xl font-semibold">
                {" "}
                Project House four
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
