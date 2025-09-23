import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import FloatingProfile from "../components/FloatingProfile";
import { useState } from "react";

const ServiceCard = ({ index, title, icon }) => {
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Tilt
      className="xs:w-[250px] w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, rgba(255,255,255,0.9), rgba(217,217,217,0.7) 30%, transparent 60%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "2px",
        }}
      />
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 1.5)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[18px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <div className="animated-border">
            <div className="inner">
              <img
                src={icon}
                alt="web-development"
                className="w-26 h-26 object-contain"
              />
            </div>
          </div>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.div variants={textVariant()}>
        <FloatingProfile />
      </motion.div>

      <div className="flex mt-4 flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
