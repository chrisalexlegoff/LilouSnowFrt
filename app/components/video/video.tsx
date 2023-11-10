"use client";
import { videoProps } from "@/app/lib/interfaces/interfaces.js";
import { ReactPlayerIcon } from "@/app/lib/svg/divers/react-player-icon";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const Video = ({ classname, videoName, isMobile, src }: videoProps) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    if (playerRef.current) {
      // This is the key to keeping the player in light mode
      playerRef.current.showPreview();
    }
    // If the video url changes, playerRef puts the player back in light mode
  }, [play]);
  return isMobile ? (
    <div id="player" className={`${classname}`}>
      <ReactPlayer
        light={<img src={src} alt="Thumbnail" />}
        url={`${process.env.NEXT_PUBLIC_VIDEOS_URL}/${videoName}`}
        controls
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
        pip={false}
        ref={playerRef}
        playing
        onEnded={() => setPlay(!play)}
        width={"100%"}
        height={"100%"}
        playIcon={<ReactPlayerIcon color={"#FFFFFF"} classname={"absolute"} />}
      />
    </div>
  ) : (
    <div id="player" className={`${classname}`}>
      <ReactPlayer
        light={<img src={src} alt="Thumbnail" />}
        url={`${process.env.NEXT_PUBLIC_VIDEOS_URL}/${videoName}`}
        controls
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
        pip={false}
        ref={playerRef}
        playing
        onEnded={() => setPlay(!play)}
        width={"100%"}
        height={"100%"}
        playIcon={<ReactPlayerIcon color={"#FFFFFF"} classname={"absolute"} />}
      />
    </div>
  );
};

export default Video;
