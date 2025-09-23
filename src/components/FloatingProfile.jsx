import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";
import { myProfile } from "../assets/index";

function makeBlob(
  radius = 200,
  points = 6,
  noise = 1.25,
  t = 0,
  timeOffset = 0
) {
  const step = (Math.PI * 2) / points;
  const coords = [];

  for (let i = 0; i < points; i++) {
    const angle = i * step;

    // 🔹 Layered sine noise for natural randomness
    const offset =
      Math.sin(i * 1.5 + t * 1.2 + timeOffset) * noise * radius * 0.6 +
      Math.sin(i * 2.3 + t * 0.7 + timeOffset * 0.5) * noise * radius * 0.4 +
      Math.sin(i * 0.7 + t * 1.7 + timeOffset * 1.5) * noise * radius * 0.3;

    const r = radius + offset;
    const x = 250 + r * Math.cos(angle);
    const y = 250 + r * Math.sin(angle);
    coords.push([x, y]);
  }

  // 🔹 Catmull–Rom → Bezier for smooth loop
  function catmullRom2bezier(points) {
    let d = "";
    for (let i = 0; i < points.length; i++) {
      const p0 = points[(i - 1 + points.length) % points.length];
      const p1 = points[i];
      const p2 = points[(i + 1) % points.length];
      const p3 = points[(i + 2) % points.length];

      const c1x = p1[0] + (p2[0] - p0[0]) / 6;
      const c1y = p1[1] + (p2[1] - p0[1]) / 6;
      const c2x = p2[0] - (p3[0] - p1[0]) / 6;
      const c2y = p2[1] - (p3[1] - p1[1]) / 6;

      d += `C ${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]} `;
    }
    return d;
  }

  let d = `M ${coords[0][0]},${coords[0][1]} `;
  d += catmullRom2bezier(coords);
  d += "Z";

  return d;
}

export default function FloatingProfile() {
  const [path, setPath] = useState(makeBlob(200, 6, 0.25, 0));

  // Animate each frame
  useAnimationFrame((t) => {
    const time = t / 1000;
    setPath(makeBlob(200, 12, 0.25, time * 1.2));
  });

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-start ">
      {/* Left: Animated Liquid Silver Blob */}
      <div className="flex justify-start">
        <svg
          viewBox="15 20 550 550"
          xmlns="http://www.w3.org/2000/svg"
          className="w-96 h-96"
        >
          <defs>
            {/* Blob clip mask */}
            <clipPath id="blobClip">
              <motion.path d={path} />
            </clipPath>

            {/* Metallic gradient */}
            <radialGradient id="silverGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#c0c0c0" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#9ca3af" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4b5563" stopOpacity="0.4" />
            </radialGradient>

            {/* Glow filter */}
            <filter id="blobGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="15"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 🔹 Main Blob with metallic gradient + glow */}
          <motion.path
            d={path}
            fill="url(#silverGradient)"
            stroke="white"
            strokeWidth="2"
            filter="url(#blobGlow)"
          />

          {/* 🔹 Profile Image clipped inside blob */}
          <motion.image
            href={myProfile}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#blobClip)"
          />
        </svg>
      </div>

      {/* Right: Text */}
      <motion.div
        animate={{
          textShadow: [
            "0px 0px 0px rgba(255,255,255,0)",
            "0px 0px 15px rgba(220,220,220,0.8)",
            "0px 0px 0px rgba(255,255,255,0)",
          ],
          color: ["#d1d5db", "#f9fafb", "#d1d5db"],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-gray-200"
      >
        <div className="flex-1  md:text-left pt-4 md:mt-0 text-justify">
          <h2 className="text-4xl font-bold text-silver drop-shadow-[0_0_10px_rgba(192,192,192,0.6)]">
            Hey, this is Thi Han 👋
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-lg text-justify">
            I'm a Web & React Native Developer who loves crafting websites and
            mobile apps that feel smooth, fast, and user-friendly. I also work
            as a freelancer and SEO enthusiast, helping brands and businesses
            improve their online presence. Whether it’s designing a modern
            wordpress website, building a mobile app for iOS & Android, or
            making sure your content ranks higher on Google, I’m all about
            creating digital experiences that make an impact.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
