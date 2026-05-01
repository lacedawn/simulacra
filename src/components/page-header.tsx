interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-8 pb-4" style={{ borderBottom: '1px dashed rgba(120, 80, 90, 0.10)' }}>
      <h1 className="text-2xl text-accent mb-2 font-display font-normal tracking-wide">{title}</h1>
      <p className="text-muted text-xs italic font-serif">{subtitle}</p>
    </header>
  );
}
