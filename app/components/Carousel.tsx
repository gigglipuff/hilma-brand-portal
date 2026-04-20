"use client";

import { useEffect, useRef, useState } from "react";

export default function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const [nextIdx, setNextIdx] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const indexRef = useRef(0);
  const inTransition = useRef(false);

  const goTo = (to: number) => {
    if (inTransition.current || to === indexRef.current) return;
    inTransition.current = true;
    setNextIdx(to);
    setFading(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFading(true);
        setTimeout(() => {
          indexRef.current = to;
          setIndex(to);
          setNextIdx(null);
          setFading(false);
          inTransition.current = false;
        }, 700);
      });
    });
  };

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      goTo((indexRef.current + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]); // eslint-disable-line react-hooks/exhaustive-deps

  if (images.length === 0) return null;

  return (
    <div style={{ position: "relative", borderRadius: 40, overflow: "hidden", height: 800 }}>
      {/* Base image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[index]}
        alt={`${alt} ${index + 1}`}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Incoming image — crossfades on top */}
      {nextIdx !== null && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={images[nextIdx]}
          alt={`${alt} ${nextIdx + 1}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: fading ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
        />
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 6,
          paddingBottom: 40,
        }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === index ? 20 : 8,
                height: 8,
                borderRadius: 999,
                backgroundColor: i === index ? "#fff" : "rgba(255,255,255,0.5)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.2s, background-color 0.2s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
