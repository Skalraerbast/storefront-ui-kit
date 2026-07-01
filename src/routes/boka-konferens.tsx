import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/boka-konferens")({
  component: () => <PageLayout eyebrow="Möten" title="Boka konferens" />,
});
