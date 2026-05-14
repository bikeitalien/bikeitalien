import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const variants = {
  /* dark green */
  primary:
    "bg-(--button-dark) text-(--text-secondary) [font-size:var(--p-size)] hover:opacity-90",

  /* light green */
  accent:
    "bg-(--accent) text-(--text-primary) [font-size:var(--p-size)] hover:opacity-90",
  /* large button for hero section */
  large:
    "bg-(--accent) text-(--text-primary) [font-size:var(--h6-size)] hover:opacity-90",
};

const Button = ({
  variant = "primary",
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}) => {
  /* button with arrow */
  const Icon =
    icon ?? (iconPosition === "left" ? IoIosArrowBack : IoIosArrowForward);

  return (
    <a
      className={`flex cursor-pointer items-center gap-2 rounded-[20px] px-4 py-3 font-medium transition-opacity ${variants[variant]} ${className}`}
      {...props}
    >
      {iconPosition === "left" && <Icon size={18} />}
      {children}
      {iconPosition === "right" && <Icon size={18} />}
    </a>
  );
};

export default Button;
