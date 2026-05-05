import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";

export const Route = createFileRoute("/le-programme")({
  component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <Section>
      <h1>Le Programme</h1>
      <p>
        Le programme est en cours de construction. Pour être informé·e du
        programme dès qu'il sera publié, vous pouvez vous abonner à la
        newsletter.
      </p>
      <iframe
        width="100%"
        height="550"
        src="https://831d7d2b.sibforms.com/serve/MUIFAGRLxcnC6V1RZbJo8HRFs16TSK5o7YcHGuBQFXk9UDZOHZxjnGTi6DcChRJlbQ-TM_todKH3Sm7SGYWsRm3bnHYgrDldw3YrTy1OmoLqJVGcX8uXMXQbyv1l71ADn25xNdJHH7iHDApLfM8TkSoA1wyOLI0wpEQcdt9S_RKKeEAHep6xsJhsyFzE4MQEWzwKPFmhQ4id_3mx"
        allowFullScreen
        allowTransparency={true}
        style={{
          display: "block",
          margin: "0 auto",
          maxWidth: "100%",
          border: "none",
          backgroundColor: "transparent",
        }}
      ></iframe>
    </Section>
  );
}
