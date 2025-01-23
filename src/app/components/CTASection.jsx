import * as React from "react";
import { CTAText } from "./CTAText";
import { CallToActionWhite } from "./CallToActionWhite";

export function CTASection() {
  return (
    <section className="flex overflow-hidden relative z-0 flex-wrap gap-16 gap-y-16 justify-between content-center items-center px-20 py-16 w-full bg-emerald-400 max-md:px-5 max-md:max-w-full" role="region" aria-label="Contact section">
      <CTAText />
      <CallToActionWhite title="Get in Touch" />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4edb319799b83723ae8f025533711c33ffa85cc9b2ce1fb49fca93b1ef582077?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915"
        alt=""
        className="object-contain absolute bottom-0 left-0 z-0 self-start aspect-[4.76] h-[278px] min-w-[240px] w-[1023px] max-md:max-w-full"
      />
    </section>
  );
}