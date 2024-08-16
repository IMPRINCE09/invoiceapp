import React from "react";

const propertyDetails = [
  {
    id: 1,
    img_one:
      "https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?t=st=1723706409~exp=1723710009~hmac=3bc455edd43ab02b0cb49d85b29f0e6b35fbe94be491e901d9ec6a3c64cd0c7b&w=826",
    img_two:
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799783.jpg?t=st=1723711658~exp=1723715258~hmac=d3720dc60c22f7795b804397acbd131345251c7d559ef1e4d7e53eb2914d8e40&w=740",
    building_name: "Smartworld One DXP",
    building_loaction: "Sector 113 Gurgaon",
    building_price: "₹ 3.58 - 6.79 Cr",
    building_type: "2, 3, 4 BHK Apartments",
    price_increament: "23.7% price increase in last 1 year",
  },
  {
    id: 2,
    img_one:
      "https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?t=st=1723706409~exp=1723710009~hmac=3bc455edd43ab02b0cb49d85b29f0e6b35fbe94be491e901d9ec6a3c64cd0c7b&w=826",
    img_two:
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799783.jpg?t=st=1723711658~exp=1723715258~hmac=d3720dc60c22f7795b804397acbd131345251c7d559ef1e4d7e53eb2914d8e40&w=740",
    building_name: "Smartworld One DXP",
    building_loaction: "Sector 113 Gurgaon",
    building_price: "₹ 3.58 - 6.79 Cr",
    building_type: "2, 3, 4 BHK Apartments",
    price_increament: "23.7% price increase in last 1 year",
  },
  {
    id: 3,
    img_one:
      "https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?t=st=1723706409~exp=1723710009~hmac=3bc455edd43ab02b0cb49d85b29f0e6b35fbe94be491e901d9ec6a3c64cd0c7b&w=826",
    img_two:
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799783.jpg?t=st=1723711658~exp=1723715258~hmac=d3720dc60c22f7795b804397acbd131345251c7d559ef1e4d7e53eb2914d8e40&w=740",
    building_name: "Smartworld One DXP",
    building_loaction: "Sector 113 Gurgaon",
    building_price: "₹ 3.58 - 6.79 Cr",
    building_type: "2, 3, 4 BHK Apartments",
    price_increament: "23.7% price increase in last 1 year",
  },
  {
    id: 4,
    img_one:
      "https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?t=st=1723706409~exp=1723710009~hmac=3bc455edd43ab02b0cb49d85b29f0e6b35fbe94be491e901d9ec6a3c64cd0c7b&w=826",
    img_two:
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799783.jpg?t=st=1723711658~exp=1723715258~hmac=d3720dc60c22f7795b804397acbd131345251c7d559ef1e4d7e53eb2914d8e40&w=740",
    building_name: "Smartworld One DXP",
    building_loaction: "Sector 113 Gurgaon",
    building_price: "₹ 3.58 - 6.79 Cr",
    building_type: "2, 3, 4 BHK Apartments",
    price_increament: "23.7% price increase in last 1 year",
  },
  {
    id: 5,
    img_one:
      "https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?t=st=1723706409~exp=1723710009~hmac=3bc455edd43ab02b0cb49d85b29f0e6b35fbe94be491e901d9ec6a3c64cd0c7b&w=826",
    img_two:
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799783.jpg?t=st=1723711658~exp=1723715258~hmac=d3720dc60c22f7795b804397acbd131345251c7d559ef1e4d7e53eb2914d8e40&w=740",
    building_name: "Smartworld One DXP",
    building_loaction: "Sector 113 Gurgaon",
    building_price: "₹ 3.58 - 6.79 Cr",
    building_type: "2, 3, 4 BHK Apartments",
    price_increament: "23.7% price increase in last 1 year",
  },
  {
    id: 6,
    img_one:
      "https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?t=st=1723706409~exp=1723710009~hmac=3bc455edd43ab02b0cb49d85b29f0e6b35fbe94be491e901d9ec6a3c64cd0c7b&w=826",
    img_two:
      "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799783.jpg?t=st=1723711658~exp=1723715258~hmac=d3720dc60c22f7795b804397acbd131345251c7d559ef1e4d7e53eb2914d8e40&w=740",
    building_name: "Smartworld One DXP",
    building_loaction: "Sector 113 Gurgaon",
    building_price: "₹ 3.58 - 6.79 Cr",
    building_type: "2, 3, 4 BHK Apartments",
    price_increament: "23.7% price increase in last 1 year",
  },
];

function Propertycard() {
  return (
    <div className="flex flex-wrap   justify-center items-center">
      {propertyDetails?.map((item) => {
        return (
          <div
            className="max-w-sm rounded transition_div_scale_small  overflow-hidden shadow-xl m-1 p-2 bg-white "
            data-aos="zoom-in-up"
          >
            <div className="flex" key={item.id}>
              <div className="flex justify-between w-28 h-28 border-red-500 border-2 rounded-full items-center m-3 relative transition_div_scale">
                <img
                  className=" w-full h-full rounded-full relative "
                  src={item.img_one}
                  alt="Smartworld One DXP"
                />
                <img
                  className="  rounded-full absolute hover:opacity-0"
                  src={item.img_two}
                  alt="Smartworld One DXP"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {item.building_name}
                </h2>
                <p className="text-sm text-gray-600">
                  {item.building_loaction}
                </p>
                <p className="mt-2 text-lg font-semibold text-gray-800">
                  {item.building_price}
                </p>
                <p className="text-sm text-gray-600">{item.building_type}</p>
                <p className="mt-2 text-sm text-green-600">
                  {item.price_increament}
                </p>
              </div>
            </div>

            <div className="mt-2 flex items-center"></div>
            <div className="mt-4 ">
              <div className="w-full border-x-2 h-1 mb-2 border-2 border-dashed "></div>
              <div>
                <button className="w-full bg-red-600 text-white text-sm font-bold py-2 px-4 rounded hover:bg-blue-700 relative">
                  <span className="show_my_div">View Number</span>
                  <span className=" show_hiiden_item"> +919037564389</span>
                </button>
              </div>

              <p className="mt-2 text-xs text-gray-500 text-center">
                @Zero Brokerage Charges
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Propertycard;
