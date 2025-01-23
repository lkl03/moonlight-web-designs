import * as React from "react";

export function PortfolioHeader() {
  return (
    <>
      <div className="flex z-0 flex-col justify-center items-center w-full leading-tight max-md:max-w-full">
        <div className="flex flex-col items-center px-20 max-w-full rounded-none w-[590px] max-md:px-5">
          <h2 id="portfolio-title" className="text-base font-bold tracking-widest text-white uppercase">
            OUR Portfolio
          </h2>
          <p className="mt-1 text-4xl font-black text-center text-neutral-900">
            Showcasing Results
          </p>
        </div>
      </div>
      <p className="z-0 self-center mt-4 text-base leading-6 text-center text-neutral-900 w-[623px] max-md:max-w-full">
        Behind every project is a happy client and a success story. Explore
        our work to see how we've brought visions like yours to life, turning
        your ideas into reality.
      </p>
    </>
  );
}