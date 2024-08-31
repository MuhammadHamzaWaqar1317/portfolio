"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { Cover } from "./cover";
import { log } from "console";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const warpSpeed = "warp Speed";

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="">
        {wordsArray.map((word, idx) => {
          console.log(idx);

          return (
            <motion.span
              key={word + idx}
              className={`dark:text-white ${
                idx < 4
                  ? "text-white"
                  : " text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600"
              }  opacity-0 `}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {/* {idx == 5 ? (
                <Cover className=" text-white text-center ">
                  {warpSpeed} {"  "}
                  bg-gradient-to-b from-indigo-500 to-purple-500
                </Cover>
              ) : (
                word
              )}{" "} */}
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className={cn(
            "dark:text-white text-black text-2xl text-center leading-snug tracking-wide",
            className
          )}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
