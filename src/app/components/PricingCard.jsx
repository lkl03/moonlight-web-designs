import React from 'react';

function PricingCard({ type, price, bgColor, priceColor, pages, features }) {
  return (
    <div className={`flex overflow-hidden flex-col justify-center self-stretch px-8 py-10 my-auto ${bgColor} rounded-xl min-h-[571px] min-w-[240px] w-[590px] max-md:px-5 max-md:max-w-full`}>
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-col justify-center items-center w-full max-md:max-w-full">
          <div className="gap-2 self-stretch w-full text-base font-bold tracking-widest leading-tight uppercase whitespace-nowrap text-neutral-900 max-md:max-w-full">
            {type}
          </div>
          <div className="flex flex-col justify-center items-center mt-2">
            <div className={`text-5xl font-black leading-tight ${priceColor} max-md:text-4xl`}>
              {price}
            </div>
            <div className="text-base font-semibold text-white">
              Per Month (12 Month Minimum Contract)
            </div>
          </div>
          <div className="mt-2 text-base text-neutral-100">
            {pages}
          </div>
        </div>
        <div className="flex mt-6 w-full bg-neutral-300 bg-opacity-20 min-h-[1px] max-md:max-w-full" />
      </div>
      <div className="flex flex-col pt-6 pb-10 w-full text-base text-neutral-100 max-md:max-w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-wrap gap-10 justify-between items-center mt-3 first:mt-0 w-full max-md:max-w-full">
            <div className="self-stretch my-auto">{feature}</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1573dfc4334c7aca26cc8792d09735c8e02801dc4569a0c5682e9ff0bd80fefa?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </div>
        ))}
      </div>
      <button 
        className="overflow-hidden self-center px-6 py-5 max-w-full text-base font-bold leading-tight text-center text-white rounded-xl border-r-2 border-white border-l-[6px] border-y-2 min-h-[56px] w-[174px] max-md:px-5"
        aria-label={`Start ${type} plan`}
      >
        Start Now
      </button>
    </div>
  );
}

export default PricingCard;