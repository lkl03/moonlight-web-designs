import * as React from "react";

export function HeroContent() {
  return (
    <div className="flex flex-col justify-center max-w-full w-[941px]">
      <div className="text-base font-bold tracking-widest leading-tight text-emerald-400 uppercase max-md:max-w-full">
        The Best Option to ELEVATE Your Online Presence
      </div>
      <div className="flex flex-col items-center mt-1 w-full text-neutral-900 max-md:max-w-full">
        <h1 className="text-7xl font-black tracking-tighter leading-[86px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
          A website Creation Service
          <br />
          as you needed
        </h1>
        <p className="mt-4 text-base leading-6 w-[540px] max-md:max-w-full">
          We offer 100% handcrafted websites tailored exclusively for your
          business. Achieve better results at a better price.
        </p>
      </div>
    </div>
  );
}