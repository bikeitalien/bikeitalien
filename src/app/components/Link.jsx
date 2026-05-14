import { GoArrowUpRight } from "react-icons/go";

const Link = ({
  href,
  variant = "default",
  className = "",
  children,
  ...props
}) => {
  const base = "transition-opacity hover:opacity-70";

  if (variant === "external") {
    return (
      <a
        href={href}
        className={`inline-flex items-center gap-1 [font-size:var(--p-size)] underline decoration-current decoration-1 underline-offset-4 ${base} ${className}`}
        {...props}
      >
        {children}
        <GoArrowUpRight size={20} />
      </a>
    );
  }

  if (variant === "small") {
    return (
      <a
        href={href}
        className={`[font-size:var(--tag-size)] no-underline ${base} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (variant === "underline") {
    return (
      <a
        href={href}
        className={`[font-size:var(--p-size)] underline decoration-current decoration-1 underline-offset-4 ${base} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`[font-size:var(--p-size)] no-underline ${base} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
