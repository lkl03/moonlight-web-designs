import * as React from "react";
import { CallToAction } from "./CallToAction";

export function FirstSection() {
  return (
    <section 
      className="flex overflow-hidden relative z-0 flex-col flex-wrap gap-10 items-start px-10 w-full min-h-[643px] max-md:px-5 max-md:max-w-full"
      role="region"
      aria-label="Website Building Services"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/04f5c6b2761f0f27c640324fb96d7f2d20c3d38a47d5d76c4b30889de9cf3a15?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915"
        className="object-cover absolute inset-0 size-full"
        alt=""
      />
      <div className="flex relative flex-col flex-1 shrink basis-0 min-w-[240px]">
        <div className="flex flex-col w-full">
          <h2 className="text-base font-bold tracking-widest leading-tight text-white uppercase">
            What we Do
          </h2>
          <h1 className="mt-1 text-5xl font-black leading-[59px] text-neutral-900 max-md:text-4xl max-md:leading-[54px]">
            We Just Build Websites,
            <br />
            From 0 to 100
          </h1>
        </div>
        <div className="flex flex-col mt-4 w-full text-base">
          <p className="leading-6 text-neutral-900">
            From concept to launch, we craft websites that captivate and
            convert. Experience the power of a stunning, custom-built website
            that showcases your business and engages your audience.
          </p>
          <CallToAction title="Learn More" />
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/33ea86def86f7fc4acf420361f87d996bed54fdfeec796e9e9e1a61bde91a420?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915"
        className="object-contain aspect-[1.09] min-w-[240px] w-[699px] max-md:max-w-full"
        alt="Website building process illustration"
      />
    </section>
  );
}