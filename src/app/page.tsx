import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-4">

      {/* Photo & Credit */}
      <div className="flex flex-col items-center w-full max-w-[450px]">
        <Image
          src="/simulacra/pics/cindyy.jpg"
          alt="Cindy Sherman – Untitled Film Still #21, 1978"
          width={800}
          height={800}
          className="w-full h-auto block grayscale object-cover border border-solid border-[#c9c3bb]"
          priority
        />
        <p className="text-xs text-muted opacity-60 font-serif italic mt-3 text-center">
          Cindy Sherman, Untitled Film Stills #21, 1978
        </p>
      </div>

      {/* Info Items */}
      <div className="flex flex-row justify-center items-center text-foreground tracking-wide text-lg font-normal">
        <span>she</span>
        <span aria-hidden="true" className="mx-4 text-muted opacity-40 select-none">·</span>
        <span>iraq</span>
        <span aria-hidden="true" className="mx-4 text-muted opacity-40 select-none">·</span>
        <span>17</span>
      </div>
    </div>
  );
}
