import { albums } from "@/data/albums";
import { PageHeader } from "@/components/page-header";

export default function AlbumsPage() {
  return (
    <section>
      <PageHeader title="albums" subtitle="music" />

      <ul>
        {albums.map((album) => (
          <li key={album.title}>
            <a href={album.spotifyUrl} target="_blank" rel="noopener noreferrer">
              {album.title}
            </a>{" "}
            <span className="mono">— {album.artist}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
