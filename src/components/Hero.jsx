import { motion } from "framer-motion";

import { styles } from "../styles";
import Button from "../components/Button";
import { words } from "../constants";

import { ComputersCanvas } from "./canvas";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section id="hero" className=" relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/src/assets/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-6">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="hero-text-slide text-[#8b67f7]">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1 rounded-full text-white-500 bg-[#b49ef5] bg-opacity-70 "
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>{" "}
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <Button
              text="My Resume"
              hoverText="View / Download"
              className="md:w-80 md:h-16 w-60 h-12"
              file="/ThiHanResume.pdf"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <ComputersCanvas />
          </div>
        </figure>
      </div>

      {/* <AnimatedCounter /> */}

      <div className="absolute xl:bottom-24 bottom-10 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
