import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, Field, SubmitButton } from "@/components/tigertrack/AuthShell";

const title = "Login — TIGERTRACK AI";
const description =
  "Sign in to TIGERTRACK AI to review camera-trap detections, individual tiger records and movement alerts for Pench Tiger Reserve.";

export const Route = createFileRoute("/login")({
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
  component: LoginPage,
});

function LoginPage() {
  const [note, setNote] = useState<string | null>(null);

  return (
    <AuthShell
      title="Sign in"
      intro="For forest staff and researchers working with Pench camera-trap data."
      footer={
        <>
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setNote("Accounts aren't connected yet — this form is ready for sign-in once access is enabled.");
        }}
      >
        <Field label="Email" type="email" name="email" required placeholder="name@forest.gov.in" autoComplete="email" />
        <Field label="Password" type="password" name="password" required placeholder="••••••••" autoComplete="current-password" />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setNote("Password resets will be handled by the reserve's data administrator.")}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Forgot password?
          </button>
        </div>

        <SubmitButton>Login</SubmitButton>

        {note && <p className="data-chip text-muted-foreground">{note}</p>}
      </form>
    </AuthShell>
  );
}
