"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DiscordCopyBtnProps {
  handle: string;
}

export function DiscordCopyBtn({ handle }: DiscordCopyBtnProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyToClipboard = async (text: string) => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unsupported securely.");
      }
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy safely to clipboard: ", err);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => copyToClipboard(handle)}
        className={cn(
          "bg-transparent border-none text-accent font-mono text-left cursor-pointer p-0 lowercase text-base",
          "hover:underline hover:text-accent-hover hover:underline-offset-4",
          "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
        )}
        aria-label="Copy Discord tag"
      >
        discord
      </button>

      {copied && (
        <div 
          className={cn(
            "fixed bottom-8 right-8 bg-box border border-border px-6 py-4 flex items-center gap-4 z-50",
            "animate-in slide-in-from-bottom-5 fade-in duration-200"
          )}
          role="status" 
          aria-live="polite"
        >
          <span aria-hidden="true" className="text-accent">✿</span>
          <span>tag copied!</span>
        </div>
      )}
    </>
  );
}
