import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Cover } from "./ui/cover";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { WavyBackground } from "./ui/WavyBackground";
import MagicButton from "./ui/MagicButton";
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
            className="lg:text-5xl md:text-4xl p-1 text-2xl max-w-4xl text-white tracking-widest "
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="text-center text-gray-300  text-lg tracking-widest">
            Hi, I'm Hamza a Next.js Deceloper
          </p>
          <MagicButton />
        </div>
      </WavyBackground>
      <GridBackground />
    </>
  );
}

export default Hero;
