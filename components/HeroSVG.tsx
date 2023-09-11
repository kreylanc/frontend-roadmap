"use client";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.2;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        ease: [0.19, 0.67, 0.86, 0.23],
        pathLength: { delay, duration: 1.6 },
        opacity: { duration: 0.01 },
      },
    };
  },
};

function HeroSVG() {
  return (
    <motion.svg
      width="310"
      height="360"
      viewBox="0 0 325 280"
      fill="none"
      initial="hidden"
      animate="visible"
      className="w-full lg:w-3/5 lg:h-3/5 mb-4 stroke-neutral-900 dark:stroke-neutral-50 text-xs font-bold"
    >
      <motion.path
        d="M234 299.5C221.6 255.9 182.167 250 164 252.5H176.25M227.5 224.5C220.7 247.7 198.667 252.833 188.5 252.5H176.25M176.25 252.5C194.167 252.333 233.6 255.9 248 271.5"
        stroke="#FFD500"
        variants={draw}
        custom={4.5}
      />
      <motion.path
        d="M164 175C176.4 131.4 215.833 125.5 234 128H221.75M170.5 100C177.3 123.2 199.333 128.333 209.5 128H221.75M221.75 128C203.833 127.833 164.4 131.4 150 147"
        variants={draw}
        custom={2.5}
      />
      <motion.path
        d="M1 21H265.5C295.047 21 319 44.9528 319 74.5V74.5C319 104.047 295.047 128 265.5 128H238H198.5H63.25C28.8703 128 1 155.87 1 190.25V190.25C1 224.63 28.8703 252.5 63.25 252.5H164H409"
        variants={draw}
        custom={0}
      />
      <motion.circle
        cx="88.5"
        cy="20.5"
        r="20.5"
        fill="#FFD500"
        stroke="none"
        variants={{
          hidden: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, delay: 0.6 },
          },
        }}
      />
      <motion.circle
        cx="236.5"
        cy="128.5"
        r="20.5"
        fill="#FFD500"
        stroke="none"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.3 },
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, delay: 1.3 },
          },
        }}
      />
      <motion.circle
        cx="164.5"
        cy="252.5"
        r="20.5"
        fill="#FFD500"
        stroke="none"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.3 },
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, delay: 1.7 },
          },
        }}
      />

      <motion.text
        x="72"
        y="25"
        fill="black"
        stroke="none"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.3 },
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, delay: 0.6 },
          },
        }}
      >
        HTML
      </motion.text>
      <motion.text
        x="225"
        y="132"
        fill="black"
        stroke="none"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.3 },
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, delay: 1.3 },
          },
        }}
      >
        CSS
      </motion.text>
      <motion.text
        x="158"
        y="257"
        fill="black"
        stroke="none"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.3 },
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, delay: 1.7 },
          },
        }}
      >
        JS
      </motion.text>
    </motion.svg>
  );
}

export default HeroSVG;
