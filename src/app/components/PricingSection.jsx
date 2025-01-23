import React from 'react';
import PricingHeader from './PricingHeader';
import PricingCard from './PricingCard';

const pricingData = [
  {
    type: 'STANDARD',
    price: '$129',
    bgColor: 'bg-emerald-400',
    priceColor: 'text-white',
    pages: 'Up to 5 pages.',
    features: ['Unlimited Edits', 'Custom Design', '24/7 Customer Service', 'Lifetime Updates', 'Hosting Included', 'SEO Integrations']
  },
  {
    type: 'ADVANCE',
    price: '$199',
    bgColor: 'bg-neutral-900',
    priceColor: 'text-emerald-400',
    pages: 'Up to 10 pages. Same benefits as Standard Plan.',
    features: ['Unlimited Edits', 'Custom Design', '24/7 Customer Service', 'Lifetime Updates', 'Hosting Included', 'SEO Integrations']
  }
];

export function PricingSection() {
  return (
    <div className="flex overflow-hidden relative z-0 flex-col justify-center px-10 pt-20 pb-32 w-full min-h-[981px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/81f203a76a24eeb9c0c99031ebfc09597079ea00a8a6fc6b70d9810e6ed13b83?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <PricingHeader />
      <div className="flex relative flex-wrap gap-5 justify-center items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink items-start self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap flex-1 shrink gap-5 justify-between items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
            {pricingData.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}