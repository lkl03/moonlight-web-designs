import * as React from "react";
import { PortfolioHeader } from "./PortfolioHeader";
import { ImageGallery } from "./ImageGallery";

export function PortfolioSection() {
  const galleryImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/475d4a167afabf84ffd948032cdb35137c76e4e5debd0ce8d293563d2fae93e4?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915",
      alt: "Portfolio showcase image 1"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e4b5ac94caca681fbd7f7f83950d8a78a62357f8bc50ece89a38ab22c1fd6a0?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915",
      alt: "Portfolio showcase image 2"
    }
  ];

  return (
    <section className="flex z-10 flex-col py-20 mt-0 w-full bg-neutral-100 max-md:max-w-full" aria-labelledby="portfolio-title">
      <div className="flex relative flex-col justify-center w-full max-md:max-w-full">
        <div className="flex overflow-hidden absolute z-0 flex-wrap gap-2.5 justify-center items-center max-w-full bottom-[-461px] h-[700px] min-h-[700px] right-[88px] w-[780px]">
          <div className="flex absolute inset-0 z-0 grow shrink self-start h-[700px] min-w-[240px] w-[624px] max-md:max-w-full" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2e5f25af91b29f0bc99506510e71ebdc9c03051e596d1ca2c99991f4012434b?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915"
            alt=""
            className="object-contain z-0 grow shrink my-auto aspect-[1.11] min-w-[240px] w-[624px] max-md:max-w-full"
          />
        </div>
        <PortfolioHeader />
      </div>
      <ImageGallery images={galleryImages} />
    </section>
  );
}