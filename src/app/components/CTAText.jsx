import * as React from "react";

export function CTAText() {
  return (
    <div className="flex z-0 flex-col self-stretch my-auto h-[95px] min-w-[240px] w-[677px] max-md:max-w-full">
      <h2 className="text-4xl font-black leading-tight text-white max-md:max-w-full">
        Doubts? Let's Talk!
      </h2>
      <p className="mt-2.5 text-base leading-6 text-neutral-100 max-md:max-w-full">
        Reach out to us to learn more about how we work
        <br />
        and how we can help you.
      </p>
    </div>
  );
}