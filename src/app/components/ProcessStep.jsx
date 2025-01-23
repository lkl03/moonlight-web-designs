import * as React from "react";

function ProcessStep({ icon, step, description }) {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink justify-center rounded-2xl basis-0 bg-neutral-100 min-w-[240px]">
      <div className="flex gap-2.5 justify-center items-center self-center px-5 rounded-2xl bg-neutral-900 h-[72px] w-[72px]">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain w-8 aspect-square"
        />
      </div>
      <div className="flex flex-col justify-center items-start mt-6 w-full text-center bg-neutral-100 text-neutral-900">
        <div className="text-xl font-bold leading-tight">{step}</div>
        <div className="mt-3 text-base">{description}</div>
      </div>
    </div>
  );
}

export default ProcessStep;