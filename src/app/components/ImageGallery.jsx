import * as React from "react";

export function ImageGallery({ images }) {
  return (
    <div className="flex flex-wrap justify-center content-center items-center self-center mt-16 w-full bg-white max-md:mt-10 max-md:max-w-full">
      {images.map((image, index) => (
        <img
          key={index}
          loading="lazy"
          src={image.src}
          alt={image.alt}
          className="object-contain grow shrink self-stretch my-auto aspect-[3.33] min-h-[384px] w-[896px] max-md:max-w-full"
        />
      ))}
    </div>
  );
}