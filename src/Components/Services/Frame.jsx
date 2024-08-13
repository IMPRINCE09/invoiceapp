import React from "react";

function Frame() {
  return (
    <div className="flex justify-center m-8">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2WLd1zCVX9g?si=gmiHMUdQ8Hf6-t2g"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Frame;
