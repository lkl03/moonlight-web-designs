import React from 'react';

function PricingHeader() {
  return (
    <div className="flex relative flex-col items-center w-full max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full leading-tight w-[905px]">
        <div className="text-base font-bold tracking-widest text-emerald-400 uppercase">
          Pricing
        </div>
        <h1 className="mt-1 text-5xl font-black text-center text-neutral-900 max-md:max-w-full max-md:text-4xl">
          <span className="text-neutral-900">Simple & Transparent </span>
          <span className="text-neutral-900">Pricing</span>
        </h1>
      </div>
      <p className="mt-4 text-base leading-6 text-center text-neutral-900 w-[623px] max-md:max-w-full">
        Choose a plan that fits your needs without any hidden fees or
        surprises. Pay the same amount every month and watch your business
        thrive.
      </p>
    </div>
  );
}

export default PricingHeader;