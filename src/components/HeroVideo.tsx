"use client";

import { useEffect, useState } from "react";

interface HeroVideoProps {
  /** URL to the video file (e.g. /hero.mp4). Use a placeholder or your own asset. */
  src?: string;
  /** Optional poster image URL for lazy loading / fallback */
  poster?: string;
  /** Prefer not to load video on mobile for performance (shows poster or gradient) */
  disableOnMobile?: boolean;
}

export function HeroVideo({
  src = "/hero-video.mp4",
  poster,
  disableOnMobile = true,
}: HeroVideoProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldShowVideo =
    mounted &&
    (!disableOnMobile || !isMobile) &&
    !!src &&
    !videoError;

  return (
    <div className="relative h-full w-full min-h-[40vh] md:min-h-full overflow-hidden bg-charcoal">
      {/* Dark overlay for contrast */}
      <div
        className="absolute inset-0 z-10 bg-black/40"
        aria-hidden="true"
      />
      {shouldShowVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          aria-hidden="true"
          onError={() => setVideoError(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        /* Placeholder gradient when video disabled (e.g. on mobile) or no src */
        <div
          className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-black"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
