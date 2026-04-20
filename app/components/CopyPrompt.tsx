"use client";

import { useState } from "react";

export default function CopyPrompt({ text, header }: { text: string; header?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {header && (
        <p style={{ fontSize: 16, fontWeight: 700, color: "#111", margin: "24px 0 12px 0" }}>
          {header}
        </p>
      )}
    <div
      style={{
        position: "relative",
        backgroundColor: "#f5f5f5",
        borderRadius: 16,
        marginTop: header ? 0 : 24,
        border: "1px solid #d4d4d4",
      }}
    >
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          padding: "6px 16px",
          backgroundColor: copied ? "#111" : "#fff",
          color: copied ? "#fff" : "#111",
          border: "1px solid #e0e0e0",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "inherit",
          transition: "background-color 0.2s, color 0.2s",
          whiteSpace: "nowrap",
          zIndex: 1,
        }}
      >
        {copied ? (
          "Copied!"
        ) : (
          <>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: "inline-block", verticalAlign: "middle", marginRight: 6, marginTop: -2 }}
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy prompt
          </>
        )}
      </button>
      <div
        style={{
          maxHeight: 320,
          overflowY: "auto",
          padding: 16,
        }}
      >
        <p style={{ fontSize: 14, color: "#444", lineHeight: 1.4, margin: 0, whiteSpace: "pre-wrap" }}>
          {text}
        </p>
      </div>
    </div>
    </>
  );
}
