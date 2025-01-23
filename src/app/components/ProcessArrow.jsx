import * as React from "react";

function ProcessArrow({ imageSrc }) {
  return (
    <img
      loading="lazy"
      src={imageSrc}
      alt=""
      className="object-contain shrink-0 aspect-square w-[110px]"
    />
  );
}

export default ProcessArrow;