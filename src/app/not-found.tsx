import { PageHeader } from "@/components/page-header";

export default function NotFound() {
  return (
    <div>
      <PageHeader title="404" subtitle="void" />
      <p style={{ marginTop: 14 }}>The requested path does not exist in this domain.</p>
    </div>
  );
}
