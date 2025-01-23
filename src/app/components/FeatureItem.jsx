export default function FeatureItem({ title, description, alignment, iconSrc }) {
    const containerClasses = `flex gap-5 items-start ${
      alignment === 'right' ? 'pl-32 max-md:pl-5' : 'pr-32 max-md:pr-5'
    }`;
    
    const contentClasses = `flex flex-col flex-1 shrink basis-0 w-[162px] ${
      alignment === 'right' ? 'items-end text-right' : ''
    }`;
  
    const content = (
      <div className={contentClasses}>
        <div className="text-xl font-bold leading-tight">{title}</div>
        <div className="mt-2 text-base leading-6">{description}</div>
      </div>
    );
  
    const icon = iconSrc && (
      <div className="flex overflow-hidden gap-2.5 justify-center items-center w-20 h-20 bg-neutral-900 min-h-[80px] rounded-[100px]">
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="object-contain self-stretch my-auto w-8 aspect-square"
        />
      </div>
    );
  
    return (
      <div className={containerClasses}>
        {alignment === 'right' ? (
          <>{content}{icon}</>
        ) : (
          <>{icon}{content}</>
        )}
      </div>
    );
  }