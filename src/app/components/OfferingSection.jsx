import { features } from '../data/offeringFeatures';
import FeatureItem from './FeatureItem';
import { CallToAction } from './CallToAction';

export function OfferingSection() {
  return (
    <section className="flex overflow-hidden z-0 flex-col px-10 py-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full" aria-labelledby="offering-title">
      <div className="flex flex-col items-center self-center max-w-full w-[905px]">
        <div className="flex flex-col items-center w-full">
          <div className="text-base font-bold tracking-widest leading-tight text-white uppercase">
            Our OFFERING
          </div>
          <h1 id="offering-title" className="mt-1 text-4xl font-black leading-10 text-center text-neutral-900 max-md:max-w-full">
            $0 Upfront Payment,
            <br />
            A Monthly Subscription That Fits Your Needs
          </h1>
        </div>
        <p className="mt-4 text-base leading-6 text-center text-neutral-900 max-md:max-w-full">
          Experience seamless website creation with our affordable monthly
          subscription plans. Whatever your needs, we have a suitable package
          for you. No upfront costs, no hidden fees, and no surprises.
          <br />
          Discover below what's included.
        </p>
      </div>
      
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex justify-between items-start w-full max-md:max-w-full">
          <div className="flex flex-col min-w-[240px] w-[382px]">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
          
          <div className="flex shrink-0 h-[456px] min-w-[240px] w-[456px]" />
          
          <div className="flex flex-col min-w-[240px] w-[382px]">
            {features.slice(3).map((feature, index) => (
              <FeatureItem key={index + 3} {...feature} />
            ))}
          </div>
        </div>
        
        <CallToAction title="View Plans" />
      </div>
    </section>
  );
}