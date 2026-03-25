import { books } from "@/data/books";
import { PageHeader } from "@/components/page-header";

export default function LibraryPage() {
  return (
    <section>
      <PageHeader title="library" subtitle="books" />

      <ul>
        {books.map((book) => (
          <li key={book.pdfFilename}>
            <a
              href={`/simulacra/books/${encodeURIComponent(book.pdfFilename)}`}
              download
            >
              {book.title}
            </a>{" "}
            <span className="mono">— {book.author}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
