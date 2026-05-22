import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const variants = {
  primary:
    "bg-(--button-dark) text-(--text-secondary) [font-size:var(--p-size)] hover:scale-[1.02]",
  secondary:
    "bg-(--button-light) text-(--text-primary) [font-size:var(--p-size)] hover:bg-(--card-background) hover:scale-[1.02] border border-(--button-dark)",
  accent:
    "bg-(--accent) text-(--text-primary) [font-size:var(--p-size)] hover:scale-[1.02]",
  large:
    "bg-(--accent) text-(--text-primary) [font-size:var(--h6-size)] hover:scale-[1.02]",
  icon: "bg-(--button-dark) text-(--text-secondary) px-4 py-4 rounded-full hover:scale-[1.02]",
};

const LinkButton = ({
  variant = "primary",
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}) => {
  const Icon =
    icon === false
      ? null
      : (icon ??
        (iconPosition === "left" ? IoIosArrowBack : IoIosArrowForward));

  const showIcon = variant === "icon" || children;

  return (
    <a
      className={`flex cursor-pointer items-center justify-center gap-2 rounded-[20px] px-4 py-3 font-medium transition-transform ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" && showIcon && <Icon size={22} />}
      {children}
      {Icon && iconPosition === "right" && showIcon && variant !== "icon" && (
        <Icon size={22} />
      )}
      {Icon && variant === "icon" && <Icon size={22} />}
    </a>
  );
};

export default LinkButton;
