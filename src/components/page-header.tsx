interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="section-divider mb-8">
      <h1 className="text-2xl text-accent mb-2 font-display font-normal tracking-wide">{title}</h1>
      {subtitle && <p className="text-muted text-xs italic font-serif">{subtitle}</p>}
    </header>
  );
}
