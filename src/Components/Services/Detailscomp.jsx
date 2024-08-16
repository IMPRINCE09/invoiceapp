import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Image_one_Url =
  "https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302661.jpg?t=st=1723740233~exp=1723743833~hmac=6b9c98ff8a7932897d8273cfbd5ad43d48481e15bef5ede644264dfd5f64f991&w=826";
const Image_two_Url =
  "https://img.freepik.com/premium-photo/small-house-with-white-walls-yellow-doors_1025556-84331.jpg?w=360";

const Image_three_url =
  "https://img.freepik.com/premium-photo/large-house_1025556-81862.jpg?w=360";

const Image_four_url =
  "https://img.freepik.com/premium-photo/house-with-driveway-driveway-with-driveway-driveway-with-driveway-driveway_1221953-28596.jpg?w=740";

const Image_five_url =
  "https://img.freepik.com/premium-photo/indian-style-luxury-decorated-house-with-ariel-view-with-big-lawn_876876-2342.jpg?w=740";
const Image_six_url =
  "https://img.freepik.com/free-photo/traditional-house-architecture_23-2151050993.jpg?t=st=1723740861~exp=1723744461~hmac=609867a59c1a3852f2d4e13f02d7d3b07534e0a75984de2b98536f15075243d0&w=826";

const Image_seven_url =
  "https://img.freepik.com/premium-photo/botanical-gardens-biodiversity_980928-27617.jpg?w=900";

export default function Detailscomp() {
  useEffect(() => {
    AOS.init({
      // offset: 200,
      // delay: 100,
      duration: 1000,
    });
  }, []);
  return (
    <div className="relative overflow-hidden bg-white mt-8">
      <div className="pb-80 pt-10 sm:pb-40 sm:pt-10 lg:pb-48 lg:pt-10">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              data-aos="fade-right"
            >
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500" data-aos="fade-left">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div
                        className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                        data-aos=""
                      >
                        <img
                          alt="setionread"
                          src={Image_one_Url}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div
                        className="h-64 w-44 overflow-hidden rounded-lg"
                        data-aos=""
                      >
                        <img
                          alt="sectionodone"
                          src={Image_two_Url}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Image_three_url}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Image_four_url}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Image_five_url}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Image_six_url}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Image_seven_url}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
