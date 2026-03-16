import { PageHeader } from "@/components/page-header";

export default function Loading() {
  return (
    <section>
      <PageHeader title="blog" subtitle="..." />
      <p className="text-muted text-sm animate-pulse">synchronizing...</p>
    </section>
  );
}
