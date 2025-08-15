"use client";

import React from "react";
import MorphingText from "./MorphingText";

const SGeoMorph: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      What if you could automate your entire
      <br />
      <span 
        style={{ 
          display: 'inline-block', 
          verticalAlign: 'baseline', 
          marginLeft: '0.0em', 
          marginRight: '0.3em' 
        }}
        className="transform -translate-y-4 sm:-translate-y-4 md:-translate-y-6"
      >
        <MorphingText
          texts={["S", "G"]}
          className="text-green-400 !h-auto !text-5xl sm:!text-5xl md:!text-7xl !font-light !leading-tight !max-w-none !mx-0 !w-auto"
        />
      </span>
      EO{" "}strategy?
    </div>
  );
};

export default SGeoMorph;
