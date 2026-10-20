import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/** A link styled as a button. Use for calls to action. */
export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-button px-6 py-3 text-base font-semibold transition-colors",
        variant === "primary" && "bg-brand text-brand-contrast hover:bg-brand-hover",
        variant === "secondary" &&
          "border border-border bg-background text-foreground hover:border-brand hover:text-brand",
        className,
      )}
    >
      {children}
    </Link>
  );
}
