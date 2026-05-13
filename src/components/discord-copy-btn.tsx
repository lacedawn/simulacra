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
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
      } else {
        // Fallback for insecure contexts or older browsers
        window.prompt("Copy this Discord tag:", text);
      }
    } catch (err) {
      if (process.env.NODE_ENV !== 'production') {
        console.error("Failed to copy to clipboard: ", err);
      }
      window.prompt("Copy this Discord tag:", text);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => copyToClipboard(handle)}
        className={cn(
          "bg-transparent border-none text-inherit font-inherit cursor-pointer p-0 lowercase",
          "hover:underline",
          "focus-visible:outline-none focus-visible:text-accent focus-visible:underline rounded-none transition-colors"
        )}
        aria-label="Copy Discord tag"
      >
        discord
      </button>

      {copied && (
        <div 
          className={cn(
            "fixed bottom-8 right-8 px-6 py-4 flex items-center gap-3 z-50 bg-background border border-solid border-border",
            "animate-in slide-in-from-bottom-5 fade-in duration-200"
          )}
          role="status" 
          aria-live="polite"
        >
          <span aria-hidden="true" className="text-accent opacity-60 text-xs">■</span>
          <span className="font-serif font-normal lowercase tracking-wide text-base">tag copied</span>
        </div>
      )}
    </>
  );
}
