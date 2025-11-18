import React from "react";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-150 grid md:grid-cols-2 grid-cols-1">
      <div className=" h-full flex flex-col justify-center gap-10">
        <h1 className="text-6xl font-bold">
          Host, Connect,
          <br />
          Celebrate: Your
          <br />
          Events, Our Platform!
        </h1>
        <p className="text-2xl">
          Discover and join exciting college events,<br />
          connect with 3,000+ students and faculty,<br />
          and grow your campus network with our university.
        </p>
        <Button onClick={()=>navigate("/all")} className={"w-35 p-6"} >Explore Now</Button>
      </div>
      <div className=" flex justify-center items-center">
        <img src="/images/hero.png" className="object-contain size-100 h-full" alt="" />
      </div>
    </div>
  );
};

export default Hero;
