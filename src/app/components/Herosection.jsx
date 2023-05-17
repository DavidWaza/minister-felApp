"use client";
import CustomCarousel from "./CustomCarousel";
import { motion } from "framer-motion";
import { position, name } from "../../../lib/userdata";

export default function Herosection() {
  return (
    <motion.div
      className="relative"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.6,
          },
        },
      }}
    >
      <div className="hero-bg">
        <motion.div
          className="flex justify-center pt-36 md:pt-[30%] md:px-32 carousel-position customCarouselPadding"
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, type: "tween" }}
        >
          <CustomCarousel />
        </motion.div>
        <motion.div
          className="text-center pt-10"
          animate={{ y: 20 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
        >
          <p className="text-white primary_font customizable-font">
            {name.toUpperCase()}
          </p>
          <p className="text-white primary_font tracking-wide mobile_font">
            {position.toUpperCase()}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
