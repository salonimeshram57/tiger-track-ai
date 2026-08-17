import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, Field, SubmitButton } from "@/components/tigertrack/AuthShell";

const title = "Sign Up — TIGERTRACK AI";
const description =
  "Request a TIGERTRACK AI account to work with camera-trap detections, stripe-pattern matches and tiger movement records from Pench Tiger Reserve.";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const [note, setNote] = useState<string | null>(null);

  return (
    <AuthShell
      title="Create an account"
      intro="Field teams, range officers and researchers can request access to the reserve's detection records."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          if (form.get("password") !== form.get("confirm")) {
            setNote("Passwords don't match.");
            return;
          }
          setNote("Accounts aren't connected yet — this form is ready once access is enabled.");
        }}
      >
        <Field label="Full name" name="name" required placeholder="Saloni Meshram" autoComplete="name" />
        <Field label="Email" type="email" name="email" required placeholder="name@forest.gov.in" autoComplete="email" />
        <Field label="Password" type="password" name="password" required placeholder="••••••••" autoComplete="new-password" />
        <Field label="Confirm password" type="password" name="confirm" required placeholder="••••••••" autoComplete="new-password" />

        <SubmitButton>Create account</SubmitButton>

        {note && <p className="data-chip text-muted-foreground">{note}</p>}
      </form>
    </AuthShell>
  );
}
