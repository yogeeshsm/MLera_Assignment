/**
 * Reusable Badge / pill label component.
 *
 * Usage:
 *   <Badge>🔬 Interactive Learning</Badge>
 *   <Badge variant="red">The Problem</Badge>
 *   <Badge variant="green">New</Badge>
 */

const VARIANTS = {
  violet: "bg-violet-100 text-violet-700 ring-1 ring-violet-200/60",
  indigo: "bg-indigo-100 text-indigo-700 ring-1 ring-indigo-200/60",
  red:    "bg-red-50    text-red-600    ring-1 ring-red-200/60",
  green:  "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60",
  amber:  "bg-amber-50  text-amber-700  ring-1 ring-amber-200/60",
  gray:   "bg-gray-100  text-gray-600   ring-1 ring-gray-200/60",
};

export default function Badge({ children, variant = "violet", className = "", pulse = false }) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1 rounded-full
        text-xs font-semibold tracking-wide
        ${VARIANTS[variant] ?? VARIANTS.violet}
        ${pulse ? "animate-pulse" : ""}
        ${className}
      `.trim()}
    >
      {children}
    </span>
  );
}
