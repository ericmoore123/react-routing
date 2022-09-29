import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function TypeEffect() {
  return (
    <>
      <ReactTypingEffect 
        text={["Web Developer", "Software Developer", "IT Professional", "Fitness Enthusiast"]} 
        speed={150}
        eraseSpeed={150}
        eraseDelay={3000}
        typingDelay={200}
        />
    </>
  );
}
