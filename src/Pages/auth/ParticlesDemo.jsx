"use client";

import { useEffect, useState } from "react";
import Particles from "@/components/ui/particles";
import SignupForm from "./SignupForm";

export function ParticlesDemo() {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#de4432");
  }, []); // Add an empty dependency array to ensure it only runs once

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-neutral-800 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
        {" "}
      </span>
      <SignupForm />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <form action="" className=""></form>
    </div>
  );
}
