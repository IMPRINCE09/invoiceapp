import React from "react";
import Crousel from "./Services/Crousel";

import Detailscomp from "./Services/Detailscomp";
import Frame from "./Services/Frame";
import Mission from "./Services/Mission";
import Center from "./Services/Center";

import Collection from "./Services/ProjectCount";

function Home() {
  return (
    <div className="w-full h-full">
      <Crousel />
      <Detailscomp />
      <Frame />
      <Mission />
      <Collection />

      <Center />
    </div>
  );
}

export default Home;
