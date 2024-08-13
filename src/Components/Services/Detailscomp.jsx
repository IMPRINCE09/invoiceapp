import React from "react";

function Detailscomp() {
  return (
    <div className="w-full flex relative  justify-center items-center">
      <div className="w-1/2 ml-10">
        <h2 className="text-center text-2xl font-semibold">
          {" "}
          <span className="text-orange-500 ">The</span> Services
        </h2>
        <h2 className="">
          VVIP Group is a multi diversified group majorly involved in Real
          Estate, Infrastructure, Hospitality, Sports and Entertainment. VVIP
          Infratech Ltd. popularly known as VVIP is a renowned name that
          excelled into prominence over a decade in the respective sectors. The
          group is built on dedication, dynamism and expertise. VVIP Group
          carries a legacy that goes over 3 decades. In real estate, the group
          launched its first residential project VVIP Addresses at Rajnagar
          Extension, Ghaziabad. As imagined, it came out to be a mark of pride
          not only in terms of its location, area, amenities, construction
          quality, green area but also the gentry or the quality of people
          residing in the project...! Since then the group has delivered
          numerous commercial and residential projects in the city of Ghaziabad
          and Noida.
        </h2>
      </div>
      <div className="w-1/2 flex justify-center">
        <div>
          <img
            className="w-80 h-80"
            src=" https://www.vvipgroup.in/images/home.jpg"
            alt="building"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Detailscomp;
