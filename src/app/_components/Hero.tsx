"use client";
import React, { useState } from "react";

function Hero() {
  const [showFirstVideo, setShowFirstVideo] = useState(true);
  const [showSecondVideo, setShowSecondVideo] = useState(false);

  const playSecondVideo = () => {
    const secondVideo = document.getElementById("name-animation-end");
    if (secondVideo) {
      setShowFirstVideo(false);
      setShowSecondVideo(true);
      (secondVideo as HTMLVideoElement).play();
    }
  };

  return (
    <div className="scroll-snap-child">
      <video
        id="name-animation"
        width="100%"
        height="100%"
        muted
        playsInline
        autoPlay
        onEnded={playSecondVideo}
        style={{
          display: showFirstVideo ? "block" : "none",
        }}
      >
        <source
          src="https://res.cloudinary.com/daxlv1ing/video/upload/v1707615515/portfolio-assets/Name-Animation.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <video
        id="name-animation-end"
        width="100%"
        height="100%"
        muted
        playsInline
        loop
        style={{
          display: showSecondVideo ? "block" : "none",
        }}
      >
        <source
          src="https://res.cloudinary.com/daxlv1ing/video/upload/v1707615846/portfolio-assets/Name-Animation-Loop.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Hero;
