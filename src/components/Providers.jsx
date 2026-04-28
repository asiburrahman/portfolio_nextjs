"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function LenisSync() {
  useLenis((lenis) => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    function update(time) {
      // Manual RAF is not strictly needed with ReactLenis root, 
      // but syncing ScrollTrigger on each frame can be beneficial.
      ScrollTrigger.update();
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return null;
}

export default function Providers({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <LenisSync />
      {children}
    </ReactLenis>
  );
}
