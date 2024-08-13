import React from "react";

function Mission() {
  return (
    <div className="flex justify-center  relative">
      <div
        className="  flex justify-center items-center relative

      "
      >
        <img
          className=" w-60 h-60  rounded-2xl  "
          src="https://img.freepik.com/premium-photo/vision-motivational-words-quotes-concept_21336-10886.jpg?w=826"
          alt="service"
        ></img>
      </div>
      <div
        className="  flex justify-center items-center absolute top-32 left-28
      "
      >
        <img
          className=" w-60 h-60  rounded-2xl  "
          src="https://img.freepik.com/premium-photo/mission-goals-target-aspirations-motivation-strategy-concept_620652-28636.jpg?w=826"
          alt="service"
        ></img>
        <div
          className=" flex justify-center items-center absolute -top-1/2 left-80
      "
        >
          <img
            className=" w-60 h-60  rounded-2xl  "
            src="https://img.freepik.com/free-photo/3d-rendering-arrow-hitting-target_23-2151266553.jpg?t=st=1723544223~exp=1723547823~hmac=601eb798c39395bd94adcaa18b3fa875add98a9bd4510e1ca81b52a338247113&w=996"
            alt="service"
          ></img>
        </div>
      </div>
      <div className="w-1/2 text-center ">
        <div
          className="text-3xl font-bold 
        "
        >
          {" "}
          <span className="text-orange-500">Vision</span> & Mission
        </div>
        <div className=" pr-9 ">
          {" "}
          <h2 className="text-xl ml-8">
            The world is changing all around us. To continue to thrive as a
            business over the next ten years and beyond, we must look ahead,
            understand the trends and forces that will shape our business in the
            future and move swiftly to prepare for what's to come. We must get
            ready for tomorrow today. That's what our 2020 Vision is all about.
            It creates a long-term destination for our business and provides us
            with a "Roadmap" for winning together with our partners.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Mission;
