/**
 * Reusable section header: badge + title + subtitle.
 *
 * Usage:
 *   <SectionHeader
 *     badge="Features"
 *     title={<>Everything You Need to <Highlight>Learn ML</Highlight></>}
 *     subtitle="MLera combines structured content..."
 *   />
 */

import Badge from "./Badge";

export function Highlight({ children, from = "from-violet-600", to = "to-indigo-600" }) {
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${from} ${to}`}>
      {children}
    </span>
  );
}

export default function SectionHeader({
  badge,
  badgeVariant = "violet",
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignClass = align === "left" ? "text-left" : "text-center mx-auto";
  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
