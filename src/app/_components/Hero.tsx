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
    <div>
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
          src="https://res.cloudinary.com/daxlv1ing/video/upload/v1706901466/name-animation.mp4"
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
          src="https://res.cloudinary.com/daxlv1ing/video/upload/v1706823739/long-name-animation-end.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Hero;
