import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/galleri")({
  component: () => <PageLayout eyebrow="Bilder" title="Galleri" />,
});
