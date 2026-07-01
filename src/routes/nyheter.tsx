import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/nyheter")({
  component: () => <PageLayout eyebrow="Aktuellt" title="Nyheter" />,
});
