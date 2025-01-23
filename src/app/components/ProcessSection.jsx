import * as React from "react";
import ProcessStep from "./ProcessStep";
import ProcessArrow from "./ProcessArrow";
import { CallToAction } from "./CallToAction";

const processSteps = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43565a4315425839c1f371d3726ccd28cc9849d3704b7f867007bfbec2a70b79?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915",
    step: "Step 1",
    description: "Choose a plan that fits your needs."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/134273dee969d0da2ac09affb9fe478b7da8fae2d132d0cfb549f8635a3993f2?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915",
    step: "Step 2",
    description: "We'll build your website based on your ideas and feedback."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0200c5105698ce5e29c1b6059874b1fab2e23fb4fd31bb475bdea37a43dc8f2?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915",
    step: "Step 3",
    description: "Launch your new site and showcase your business with pride."
  }
];

const arrowImages = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/03b39c8b1179657e02bb9718ad254a35d204e19e7febba218b767d88d3c01b6f?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/cabbcd350eaf4206cd91477d5e461b50dd41d6abfb9a4006edf820dfb71b0763?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915"
];

export function ProcessSection() {
  return (
    <section className="flex z-0 flex-col px-10 py-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full" aria-labelledby="process-title">
      <div className="flex flex-col justify-center w-full text-center max-md:max-w-full">
        <div className="flex flex-col justify-center w-full leading-tight max-md:max-w-full">
          <div className="self-center text-base font-bold tracking-widest text-emerald-400 uppercase">
            OUR PROCESS
          </div>
          <h2 id="process-title" className="mt-1 text-4xl font-black text-neutral-900 max-md:max-w-full">
            How It Works
          </h2>
        </div>
        <p className="self-center mt-4 text-base text-neutral-900 max-md:max-w-full">
          We make website creation simple. Share your vision, and we'll bring it
          to life. Your satisfaction is our priority.
        </p>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-center items-start w-full max-md:max-w-full">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <ProcessStep
                icon={step.icon}
                step={step.step}
                description={step.description}
              />
              {index < processSteps.length - 1 && (
                <ProcessArrow imageSrc={arrowImages[index]} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <CallToAction title="Get Started" />
    </section>
  );
}