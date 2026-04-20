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
    <div style={{ backgroundColor: "#faf7f5", paddingTop: 72, paddingBottom: 96 }}>
      <div style={{ maxWidth: 1035, margin: "0 auto" }}>
        <p style={{ fontSize: 20, color: "#444", margin: 0, fontWeight: 500, textAlign: "center" }}>
          Över en miljon drömmar skapade
        </p>

        <p
          className={playfair.className}
          aria-label={formatted}
          style={{
            fontSize: 246,
            fontWeight: 700,
            lineHeight: 1,
            color: "#111",
            margin: 0,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {formatted.split("").map((char, i) => (
            <RollingDigit key={i} char={char} prevChar={prevFormatted[i] ?? char} />
          ))}
        </p>
      </div>
    </div>
  );
}
