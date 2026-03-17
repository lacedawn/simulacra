import { albums } from "@/data/albums";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";

export default function AlbumsPage() {
  return (
    <section>
      <PageHeader title="albums" subtitle="music" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {albums.map((album) => (
          <a
            key={album.title}
            href={album.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col relative bg-box border border-border p-2 min-w-0 h-full group hover:border-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
          >
            <div className="relative w-full aspect-square mb-4 border border-border bg-[rgba(255,255,255,0.02)] overflow-hidden pointer-events-none z-10">
              <Image
                src={album.cover}
                alt={`Cover art for ${album.title} by ${album.artist}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-none filter brightness-100 group-hover:brightness-110"
              />
            </div>
            <div className="flex flex-col gap-1 px-2 min-w-0 relative z-10">
              <h2 className="text-base font-medium leading-tight m-0 text-foreground break-words group-hover:text-accent">
                {album.title}
              </h2>
              <p className="text-sm text-muted break-words m-0">
                {album.artist}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
