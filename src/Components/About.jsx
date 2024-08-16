"use client";

import React from "react";
import { Link } from "react-router-dom";
import Aowner from "./Pages/AbouteC/Aowner";
import Aallteam from "./Pages/AbouteC/Aallteam";

export default function About() {
  return (
    <div className="bg-white ">
      <div className="relative isolate px-6 pt-1 lg:px-8 about_image ">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:py-4">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3  text-sm leading-6 text-white ring-1 ring-gray-700 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <div className="">
              <p className="mt-6 text-lg leading-8 text-slate-100 ">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="#"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Get started
              </Link>
              <Link to="#" className="text-lg font-bold leading-6 text-red-600">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
      <div>
        <Aowner />
        <Aallteam />
      </div>
    </div>
  );
}
