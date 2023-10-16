"use client";
import { videoProps } from "@/app/lib/interfaces/interfaces.js";
import { ReactPlayerIcon } from "@/app/lib/svg/divers/react-player-icon";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const Video = ({ classname }: videoProps) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    if (playerRef.current) {
      // This is the key to keeping the player in light mode
      playerRef.current.showPreview();
    }
    // If the video url changes, playerRef puts the player back in light mode
  }, [play]);
  return (
    <div className={`${classname}`}>
      <ReactPlayer
        light={
          <img
            src="\img\mobile\a-propos\fond-video-presentation.png"
            alt="Thumbnail"
          />
        }
        url="https://localhost:8000/videos/video-1657379124-652c1345a291d217834365.mp4"
        controls
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
        pip={false}
        ref={playerRef}
        playing
        // onPlay={() => setPlay(!play)}
        onPause={() => setPlay(!play)}
        width={"100%"}
        height={"100%"}
        playIcon={<ReactPlayerIcon color={"#FFFFFF"} classname={"absolute"} />}
      />
    </div>
  );
};

export default Video;
