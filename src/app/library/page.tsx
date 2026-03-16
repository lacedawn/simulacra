import { books } from "@/data/books";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";

export default function LibraryPage() {
  return (
    <section>
      <PageHeader title="library" subtitle="books" />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {books.map((book) => (
          <div
            key={book.pdfFilename}
            className="flex flex-col relative bg-box border border-border p-2 sm:p-3 h-full min-w-0 group hover:border-accent transition-colors"
          >
            <div className="relative w-full aspect-book mb-3 sm:mb-4 border border-border bg-[rgba(255,255,255,0.02)] overflow-hidden pointer-events-none z-10">
              <Image
                src={book.cover}
                alt={`Cover page of ${book.title} by ${book.author}`}
                fill
                className="object-cover transition-none filter brightness-100 group-hover:brightness-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col gap-1 sm:gap-1 px-1 min-w-0 relative z-10">
              <h2 className="text-[0.95rem] sm:text-base font-medium leading-[1.25] sm:leading-[1.3] m-0 text-foreground break-words group-hover:text-accent">
                <a 
                  href={`/simulacra/books/${encodeURIComponent(book.pdfFilename)}`}
                  download
                  className="before:absolute before:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
                >
                  {book.title}
                </a>
              </h2>
              <p className="text-[0.825rem] sm:text-sm text-muted break-words m-0 leading-snug">
                {book.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
