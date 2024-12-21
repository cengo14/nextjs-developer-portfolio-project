// MouseFollower.js
"use client"; // Eğer bu bileşeni App Router kullanarak yapıyorsanız

import React, { useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ height: "100vh", position: "relative" }}
    >
      <motion.img
        src="/football.svg"
        style={{
          position: "absolute",
          top: mousePosition.y,
          left: mousePosition.x,
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />
    </div>
  );
};

export default MouseFollower;
