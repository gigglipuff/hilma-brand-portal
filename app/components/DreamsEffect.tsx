"use client";

import { Playfair_Display } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

function RollingDigit({ char, prevChar }: { char: string; prevChar: string }) {
  const [rolling, setRolling] = useState(false);
  const [prev, setPrev] = useState(prevChar);

  useEffect(() => {
    if (char === prev) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setRolling(true);
        const t = setTimeout(() => {
          setPrev(char);
          setRolling(false);
        }, 380);
        return () => clearTimeout(t);
      });
    });
  }, [char]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!/\d/.test(char)) {
    return <span>{char}</span>;
  }

  return (
    <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", height: "1em" }}>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          transform: rolling ? "translateY(-50%)" : "translateY(0)",
          transition: rolling ? "transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
        }}
      >
        <span style={{ display: "block", height: "1em", lineHeight: 1 }}>{prev}</span>
        <span style={{ display: "block", height: "1em", lineHeight: 1 }}>{char}</span>
      </span>
    </span>
  );
}

export default function DreamsEffect() {
  const [count, setCount] = useState(1000676);
  const prevRef = useRef(1000676);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  // Auto-fit font size to fill container width
  const fit = () => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;
    text.style.fontSize = "300px";
    const ratio = container.clientWidth / text.scrollWidth;
    text.style.fontSize = Math.floor(300 * ratio) + "px";
  };

  useEffect(() => {
    fit();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        prevRef.current = c;
        return c + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const formatted = count.toLocaleString("en-US");
  const prevFormatted = prevRef.current.toLocaleString("en-US");

  return (
    <div style={{ backgroundColor: "#faf7f5", paddingTop: 72, paddingBottom: 72 }}>
      <div ref={containerRef} style={{ maxWidth: 1035, margin: "0 auto" }}>
        <p
          ref={textRef}
          className={playfair.className}
          aria-label={formatted}
          style={{
            fontWeight: 700,
            lineHeight: 1,
            color: "#111",
            margin: 0,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
          }}
        >
          {formatted.split("").map((char, i) => (
            <RollingDigit key={i} char={char} prevChar={prevFormatted[i] ?? char} />
          ))}
        </p>

        <p style={{ fontSize: 14, color: "#444", margin: "28px 0 0 0", fontWeight: 400 }}>
          Vi har hjälpt till att skapa över en miljon drömmar.
        </p>
      </div>
    </div>
  );
}
