import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Mission() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="  w-full sm:flex sm:justify-center bg-slate-200 bg-opacity-45 ">
      <div
        className="flex justify-center items-center bg-blue-200 m-6 rounded-lg shadow-xl bg-opacity-45 "
        data-aos="fade-right"
      >
        <img
          className=" w-80 h-80  rounded-2xl transition_div_big "
          src="/img/What_Is_The_Vision_And_Mission_Of_SBA_s_8a_Certification_-removebg-preview.png"
          alt="service"
        ></img>
      </div>

      <div
        className=" text-center sm:w-1/2 bg-blue-200 m-6 rounded-lg shadow-xl bg-opacity-45"
        data-aos="fade-left"
      >
        <div className="text-3xl font-bold">
          <span className="text-orange-500">Vision</span> & Mission
        </div>
        <div className=" pr-9 ">
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
