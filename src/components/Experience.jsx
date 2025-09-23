import React, { useRef, useState, useLayoutEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useScroll, useSpring } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Variants for bullet points
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Experience Card
const ExperienceCard = ({ experience, lineHeight, containerTop }) => {
  const iconRef = useRef(null);
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reservedHeight, setReservedHeight] = useState(220); // fallback height

  // Measure content height once
  useLayoutEffect(() => {
    if (contentRef.current) {
      setReservedHeight(contentRef.current.offsetHeight);
    }
  }, []);

  // Update visibility based on line
  useLayoutEffect(() => {
    const update = () => {
      if (!iconRef.current) return;
      const rect = iconRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const iconTop = rect.top + scrollTop - containerTop;
      setIsVisible(lineHeight >= iconTop);
    };

    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [lineHeight, containerTop]);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease",
        minHeight: reservedHeight, // dynamically reserved height
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div
          ref={iconRef}
          className="flex justify-center items-center w-full h-full"
        >
          <motion.img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[80%] h-[80%] object-contain"
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          />
        </div>
      }
    >
      <div ref={contentRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h3
            className="text-white text-[24px] font-bold"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {experience.title}
          </motion.h3>

          <motion.p
            className="text-secondary text-[16px] font-semibold"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {experience.company_name}
          </motion.p>

          <motion.ul
            className="mt-5 list-disc ml-5 space-y-2"
            variants={listVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {experience.points.map((point, idx) => (
              <motion.li
                key={idx}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
                variants={itemVariants}
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [containerTop, setContainerTop] = useState(0);
  const [headerOffset, setHeaderOffset] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const updateLine = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;

      if (headerRef.current) {
        setHeaderOffset(headerRef.current.offsetHeight + 20);
      }

      setContainerTop(rect.top + scrollTop);

      const adjustedHeight =
        rect.height - (headerRef.current?.offsetHeight || 0) - 20;
      setLineHeight(adjustedHeight * scaleY.get());
    };

    updateLine();
    const unsubscribe = scaleY.onChange(() => updateLine());
    window.addEventListener("resize", updateLine);
    window.addEventListener("scroll", updateLine);
    return () => {
      unsubscribe();
      window.removeEventListener("resize", updateLine);
      window.removeEventListener("scroll", updateLine);
    };
  }, [scaleY]);

  return (
    <section className="relative" ref={containerRef}>
      {/* Header */}
      <motion.div
        ref={headerRef}
        variants={textVariant()}
        className="text-center mb-12"
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      {/* Vertical line */}
      <motion.div
        className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 w-[4px]
                   bg-gradient-to-b from-pink-500 to-purple-500 origin-top z-0"
        style={{
          top: headerOffset,
          height: containerRef.current
            ? containerRef.current.offsetHeight - headerOffset
            : 0,
          scaleY,
        }}
      />

      {/* Timeline cards */}
      <div className="relative z-10">
        <VerticalTimeline lineColor="transparent">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              experience={exp}
              lineHeight={lineHeight}
              containerTop={containerTop + headerOffset}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
