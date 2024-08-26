import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Cover } from "./ui/cover";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { WavyBackground } from "./ui/WavyBackground";
import GridBackground from "./ui/GridBackground";
function Hero() {
  return (
    <>
      <Spotlight className="absolute -top-28" fill="white" />
      {/* <Spotlight className="absolute -top-10" fill="white" /> */}

      <WavyBackground
        backgroundFill="#0c0f24"
        speed="fast"
        className="flex h-screen"
      >
        <div className="flex justify-center items-center flex-col h-screen gap-2">
          <h2 className="uppercase text-center text-gray-300">
            Crafting Dynamic Web Solutions with Nextjs
          </h2>
          <TextGenerateEffect
            className="text-6xl text-white tracking-widest"
            words="I Build amazing websites at "
          />
        </div>
      </WavyBackground>
      <GridBackground />
    </>
  );
}

export default Hero;
