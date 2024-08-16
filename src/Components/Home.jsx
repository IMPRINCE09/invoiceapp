import React from "react";
import Crousel from "./Services/Crousel";

import Detailscomp from "./Services/Detailscomp";
import Frame from "./Services/Frame";
import Mission from "./Services/Mission";
import Center from "./Services/Center";

import Collection from "./Services/ProjectCount";
import Servecard from "./Services/Servecard";

function Home() {
  return (
    <div className="w-full h-full ">
      <Crousel />
      <Detailscomp />
      <Frame />
      <Mission />
      <Collection />

      <Center />
      <Servecard />

      {/* <div className="bg_text">
        <div className="text_floating">
          this is text ues done i am king the process
        </div>
      </div> */}
    </div>
  );
}

export default Home;
