import { books } from "@/data/books";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";

export default function LibraryPage() {
  return (
    <section>
      <PageHeader title="library" subtitle="books" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
        {books.map((book) => (
          <a
            key={book.pdfFilename}
            href={`/simulacra/books/${encodeURIComponent(book.pdfFilename)}`}
            download
            className="flex flex-col relative old-box p-1.5 sm:p-2.5 h-full min-w-0 group hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
            style={{ textDecoration: 'none' }}
          >
            <div className="relative w-full aspect-book mb-2 sm:mb-3 bg-[rgba(120,80,90,0.02)] overflow-hidden pointer-events-none z-10" style={{ border: '1px dashed rgba(120, 80, 90, 0.08)' }}>
              <Image
                src={book.cover}
                alt={`Cover page of ${book.title} by ${book.author}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>
            <div className="flex flex-col gap-1 px-0.5 min-w-0 relative z-10">
              <h2 className="text-[0.8rem] sm:text-[0.85rem] font-display font-normal leading-[1.3] m-0 text-foreground break-words group-hover:text-accent tracking-wide">
                {book.title}
              </h2>
              <p className="text-[0.7rem] sm:text-[0.75rem] text-muted break-words m-0 leading-tight font-mono font-light">
                {book.author}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
