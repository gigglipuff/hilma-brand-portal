"use client";

import { useState } from "react";

export default function ColorSwatch({ hex, name }: { hex: string; name: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          backgroundColor: hex,
          borderRadius: 24,
          height: 200,
          width: "100%",
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 14, color: "#fff", fontWeight: 500, letterSpacing: "0.04em" }}>
            {copied ? "Copied!" : hex}
          </span>
          <button
            onClick={handleCopy}
            aria-label={`Copy ${hex}`}
            title="Copy hex"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              opacity: 0.8,
            }}
          >
            {copied ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <p style={{ fontSize: 20, fontWeight: 500, color: "#111", margin: 0, textAlign: "center" }}>{name}</p>
    </div>
  );
}
