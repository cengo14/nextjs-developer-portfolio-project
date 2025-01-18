import React from "react";
import Typewriter from "typewriter-effect";
const TypewriterEffect = () => {
  return (
    <div className="max-w-4xl mt-2 text-lg md:text-3xl md:mt-3  bg-gradient-to-r from-tealish-200 via-orangesh-100 to-orangesh-300 text-transparent bg-clip-text">
      <Typewriter
        options={{
          loop: true,
          delay: 75,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1000)
            .typeString("Html ile başladığım bu serüvene JavaScript")
            .pauseFor(300)
            .deleteChars(10)
            .typeString(
              "<strong>JS</strong>, <strong>React</strong> ve  <strong>TypeScript</strong> ile devam ediyorum "
            )
            .typeString(
              ' şu aralar <strong style="color: #36BA98;">Next.Js</strong> ile ilgiliyim...'
            )
            .pauseFor(1000)
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterEffect;
