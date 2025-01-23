import * as React from "react";

export function CallToAction({ title }) {
    return (
        <button 
            className="overflow-hidden self-stretch px-6 py-5 mt-8 max-w-full text-base font-bold leading-tight text-emerald-400 rounded-xl border-r-2 border-emerald-400 border-l-[6px] border-y-2 min-h-[56px] w-[174px] max-md:px-5 mx-auto max-md:max-w-full"
            aria-label="Get Started with Website Creation Service"
            tabIndex={0}
        >
                {title}
        </button>
    );
}