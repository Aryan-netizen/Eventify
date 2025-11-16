import React from "react";
import { Button } from "./button";

const Hero = () => {
  return (
    <div className="min-h-150 grid grid-cols-2">
      <div className=" h-full flex flex-col justify-center gap-10">
        <h1 className="text-6xl font-bold">
          Host, Connect,
          <br />
          Celebrate: Your
          <br />
          Events, Our Platform!
        </h1>
        <p className="text-2xl">
          Book and learn helpful tips from 3,168+ mentors in <br />
          world-class companies with our global community.
        </p>
        <Button className={"w-35 p-6"}>Explore Now</Button>
      </div>
      <div className=" flex justify-center items-center">
        <img src="/images/hero.png" className="object-contain size-100 h-full" alt="" />
      </div>
    </div>
  );
};

export default Hero;
