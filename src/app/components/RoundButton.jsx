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

const RoundButton = ({
  variant = "primary",
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) => {
  /* button with arrow */
  const Icon =
    icon ?? (iconPosition === "left" ? IoIosArrowBack : IoIosArrowForward);

  return (
    <a
      className={` cursor-pointer items-center justify-center rounded-full px-4 py-4 font-medium transition-opacity ${variants[variant]} ${className}`}
      {...props}
    >
      {iconPosition === "left" && <Icon size={24} />}
      {iconPosition === "right" && <Icon size={24} />}
    </a>
  );
};

export default RoundButton;