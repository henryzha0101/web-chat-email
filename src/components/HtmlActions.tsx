"use client";

import { useState } from "react";

interface HtmlActionsProps {
  html: string;
  filename: string;
}

export default function HtmlActions({ html, filename }: HtmlActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleCopy}
        className={`px-3 py-1 text-sm rounded border transition-colors cursor-pointer ${
          copied
            ? "bg-green-100 text-green-700 border-green-300"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
        }`}
      >
        {copied ? "✓ Copied!" : "📋 Copy"}
      </button>
      <button
        onClick={handleDownload}
        className="px-3 py-1 text-sm rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
      >
        💾 Download
      </button>
    </div>
  );
}
