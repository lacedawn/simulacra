"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // We can securely report the error to an observability tool here
  useEffect(() => {
    // e.g. Sentry.captureException(error)
  }, [error]);

  return (
    <div className="bg-box border border-border p-6 flex flex-col items-start gap-4">
      <p className="text-foreground">something dissolved.</p>
      <button 
        type="button"
        onClick={() => reset()} 
        className="bg-transparent border-none text-accent font-mono underline underline-offset-4 cursor-pointer hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 p-0"
      >
        try again
      </button>
    </div>
  );
}
