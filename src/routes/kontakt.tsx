import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/kontakt")({
  component: () => <PageLayout eyebrow="Hitta hit" title="Kontakta oss" />,
});
