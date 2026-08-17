import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Radar } from "lucide-react";
import forest from "@/assets/forest-night.jpg";

export function AuthShell({
  title,
  intro,
  children,
  footer,
}: {
  title: string;
  intro: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <main className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden night-bg px-5 py-16 sm:px-8">
      <img
        src={forest}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1088}
        className="pointer-events-none absolute inset-0 -z-30 size-full scale-105 object-cover opacity-30"
      />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[var(--gradient-night)] opacity-85" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-[0.14]" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md"
      >
        <Link
          to="/"
          className="data-chip inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> Back to site
        </Link>

        <div className="panel mt-4 rounded-sm p-6 shadow-[var(--shadow-deep)] sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-sm border border-primary/40 bg-primary/10">
              <Radar className="size-4 text-primary" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-semibold tracking-[0.14em] text-foreground">
                TIGERTRACK AI
              </span>
              <span className="data-chip block truncate text-muted-foreground">
                Pench Tiger Reserve
              </span>
            </span>
          </div>

          <h1 className="mt-7 font-display text-2xl font-semibold text-foreground">{title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{intro}</p>

          <div className="mt-7">{children}</div>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">{footer}</p>
      </motion.div>
    </main>
  );
}

export function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="data-chip block text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-sm border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
      />
    </label>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className="w-full rounded-sm btn-amber px-6 py-3 text-sm font-semibold shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
    >
      {children}
    </button>
  );
}
