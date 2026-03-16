interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-8 border-b border-border pb-4">
      <h1 className="text-2xl text-accent mb-2 font-medium">{title}</h1>
      <p className="text-muted text-sm italic">{subtitle}</p>
    </header>
  );
}
