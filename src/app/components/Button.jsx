import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const variants = {
  primary: "bg-(--button-dark) text-(--text-secondary) hover:opacity-90",
  accent: "bg-(--accent) text-(--text-primary) hover:opacity-90",
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

  return (
    <button
      className={`flex cursor-pointer items-center gap-2 rounded-[20px] px-4 py-3 font-medium text-(--step-0) transition-opacity ${variants[variant]} ${className}`}
      {...props}
    >
      {iconPosition === "left" && <Icon size={18} />}
      {children}
      {iconPosition === "right" && <Icon size={18} />}
    </button>
  );
};

export default Button;
