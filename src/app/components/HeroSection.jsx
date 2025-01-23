import * as React from "react";
import { CallToAction } from "./CallToAction";
import { HeroContent } from "./HeroContent";

export function HeroSection() {
return (
    <main className="flex z-0 flex-col items-center px-10 pt-52 pb-96 w-full text-center min-h-[990px] max-md:px-5 max-md:py-24 max-md:max-w-full" role="main">
        <HeroContent />
        <CallToAction title="Get Started" />
    </main>
);
}