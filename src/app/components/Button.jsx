import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const variants = {
  primary:
    "bg-(--button-dark) text-(--text-secondary) [font-size:var(--p-size)] hover:opacity-90",

  accent:
    "bg-(--accent) text-(--text-primary) [font-size:var(--p-size)] hover:opacity-90",

  large:
    "bg-(--accent) text-(--text-primary) [font-size:var(--h6-size)] hover:opacity-90",

  icon: "bg-(--button-dark) text-(--text-secondary) px-4 py-4 rounded-full hover:opacity-90",
};

const Button = ({
  variant = "primary",
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}) => {
  const Icon =
    icon ?? (iconPosition === "left" ? IoIosArrowBack : IoIosArrowForward);

  const showIcon = variant === "icon" || children;

  return (
    <a
      className={`flex cursor-pointer items-center justify-center gap-2 rounded-[20px] px-4 py-3 font-medium transition-opacity ${variants[variant]} ${className}`}
      {...props}
    >
      {iconPosition === "left" && showIcon && <Icon size={24} />}

      {children}

      {iconPosition === "right" && showIcon && variant !== "icon" && (
        <Icon size={24} />
      )}

      {variant === "icon" && <Icon size={24} />}
    </a>
  );
};

export default Button;
