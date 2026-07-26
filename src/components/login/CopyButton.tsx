"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-bg-secondary py-1.5 px-3 md:px-1 lg:px-3 text-center rounded-xl border border-transparent hover:border-black main-transition"
      type="button"
    >
      {copied ? "Copied !" : "Copy"}
    </button>
  );
}
