// components/common/Button.tsx
import { ButtonProps } from "@/interfaces";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  icon,
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    search:
      "rounded-full bg-yellow-400 hover:bg-yellow-500 text-white w-10 h-10 focus:ring-yellow-400",
    profile:
      "rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 w-10 h-10 focus:ring-gray-400",
    info:
      "rounded-full bg-black text-white px-4 py-1 text-xs hover:bg-gray-800 focus:ring-black",
    primary:
      "rounded-full bg-[#34967c] text-white px-4 py-1 text-sm hover:bg-[#2d7d68] focus:ring-blue-500",
    secondary:
      "rounded-full bg-white text-[#34967c] border border-[#34967c] px-4 py-1 text-sm hover:bg-gray-100 focus:ring-gray-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {icon && <span className={children ? "mr-2" : ""}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
