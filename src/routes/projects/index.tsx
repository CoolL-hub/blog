import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to="/projects/ui_lib">UI Library</Link>
    </div>
  );
}
