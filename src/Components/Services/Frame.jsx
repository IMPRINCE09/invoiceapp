import React from "react";

function Frame() {
  return (
    <div className="flex justify-center m-8">
      <div className="hidden px-2 sm:block">
        {" "}
        <iframe
          width="320"
          height="325"
          src="https://www.youtube.com/embed/xwwGb7CPZHY?si=V3aX5rXwpiVInZlH"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2WLd1zCVX9g?si=gmiHMUdQ8Hf6-t2g"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <div className="hidden  px-2 sm:block ">
        {" "}
        <iframe
          width="320"
          height="325"
          src="https://www.youtube.com/embed/pmak0cL8cNM?si=dLe6ZvjSS9vd3dCH"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Frame;
