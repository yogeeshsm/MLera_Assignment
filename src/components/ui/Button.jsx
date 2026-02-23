/**
 * Reusable Button component.
 *
 * Usage:
 *   <Button href="#cta">Get Started</Button>
 *   <Button variant="outline" href="#features">Explore</Button>
 *   <Button variant="ghost">Learn More</Button>
 */

const VARIANTS = {
  primary:
    "text-white bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300",
  outline:
    "text-violet-700 bg-white border-2 border-violet-200 hover:border-violet-400 hover:shadow-lg",
  ghost:
    "text-white border-2 border-white/30 hover:bg-white/10",
  white:
    "text-violet-700 bg-white hover:scale-105 hover:shadow-2xl shadow-lg",
};

const SIZES = {
  sm:  "px-4 py-2 text-sm",
  md:  "px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base",
  lg:  "px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out hover:scale-105 cursor-pointer select-none";

  const classes = `${base} ${VARIANTS[variant] ?? VARIANTS.primary} ${SIZES[size] ?? SIZES.md} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
}
