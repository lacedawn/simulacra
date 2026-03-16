import { books } from "@/data/books";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";

export default function LibraryPage() {
  return (
    <section>
      <PageHeader title="library" subtitle="books" />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
        {books.map((book) => (
          <div
            key={book.pdfFilename}
            className="flex flex-col relative bg-box border border-border p-1.5 sm:p-2 h-full min-w-0 group hover:border-accent transition-colors"
          >
            <div className="relative w-full aspect-book mb-2 sm:mb-2.5 border border-border bg-[rgba(255,255,255,0.02)] overflow-hidden pointer-events-none z-10">
              <Image
                src={book.cover}
                alt={`Cover page of ${book.title} by ${book.author}`}
                fill
                className="object-cover transition-none filter brightness-100 group-hover:brightness-110"
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
              />
            </div>
            <div className="flex flex-col gap-0.5 px-0.5 min-w-0 relative z-10">
              <h2 className="text-[0.8rem] sm:text-[0.85rem] font-medium leading-[1.2] m-0 text-foreground break-words group-hover:text-accent line-clamp-2">
                <a 
                  href={`/simulacra/books/${encodeURIComponent(book.pdfFilename)}`}
                  download
                  className="before:absolute before:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
                >
                  {book.title}
                </a>
              </h2>
              <p className="text-[0.7rem] sm:text-xs text-muted break-words m-0 leading-tight truncate">
                {book.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
