import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: string; variant?: "primary" | "secondary" | "ghost"; size?: "default" | "sm" };
const variants = { primary: "bg-ink text-paper shadow-[4px_4px_0_#f2674a] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#f2674a]", secondary: "border-2 border-ink bg-paper text-ink hover:bg-[#fff4dc]", ghost: "text-muted hover:bg-[#f8eedc] hover:text-ink" };

export function Button({ className, variant = "primary", size = "default", href, children, ...props }: ButtonProps) {
  const classes = cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 sm:px-6", variants[variant], size === "sm" ? "py-2 text-sm" : "py-3 text-base", className);
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}
