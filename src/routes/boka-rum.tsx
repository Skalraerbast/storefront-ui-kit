import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/boka-rum")({
  component: () => <PageLayout eyebrow="Boende" title="Boka rum" />,
});
