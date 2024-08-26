import React from "react";

function GridBackground() {
  return (
    <div className="h-[50rem] w-screen dark:bg-black   dark:bg-grid-white/[0.2] bg-grid-black/[0.1] absolute top-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#0c0f24] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}

export default GridBackground;
