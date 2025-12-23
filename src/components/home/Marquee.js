// Marquee.tsx
import React from "react";

export default function Marquee({ children, speed = 20, className = "" }) {
  return (
    <div className={`overflow-hidden ${className} main-marquee-file`}>
      <div
        className="flex w-fit animate-scroll"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
