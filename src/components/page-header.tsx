interface PageHeaderProps {
  title: string;
  subtitle: string;
  id?: string;
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function PageHeader({ title, subtitle, id }: PageHeaderProps) {
  const headingId = id ?? slugify(title);

  return (
    <header style={{ borderBottom: "1px solid #000", paddingBottom: 10, marginBottom: 18 }}>
      <h1 id={headingId}>{title}</h1>
      <p style={{ marginTop: 6, fontStyle: "italic" }}>{subtitle}</p>
    </header>
  );
}
