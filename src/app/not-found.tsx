import { PageHeader } from "@/components/page-header";

export default function NotFound() {
  return (
    <div className="max-w-container-sm mx-auto">
      <PageHeader title="404" subtitle="void" />
      <p className="text-muted mt-8">The requested path does not exist in this domain.</p>
    </div>
  );
}
