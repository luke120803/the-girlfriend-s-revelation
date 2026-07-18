import { createFileRoute } from "@tanstack/react-router";
import { HubScreen } from "@/components/screens/HubScreen";

export const Route = createFileRoute("/hub")({
  component: HubPage,
});

function HubPage() {
  return <HubScreen />;
}
