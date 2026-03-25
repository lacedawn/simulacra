"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="eden-card" style={{ marginTop: 24 }}>
      <p>Something dissolved.</p>
      <p style={{ marginTop: 8 }}>
        <a href="/simulacra/">Back to home</a>
      </p>
    </div>
  );
}
