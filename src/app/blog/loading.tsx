import { PageHeader } from "@/components/page-header";

export default function Loading() {
  return (
    <section>
      <PageHeader title="blog" subtitle="..." />
      <p className="mono" style={{ marginTop: 12 }}>
        synchronizing...
      </p>
    </section>
  );
}

