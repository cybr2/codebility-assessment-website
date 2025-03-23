import { IButtonProps } from "../Types/types";

export const Button: React.FC<IButtonProps> = ({
    children,
    onClick,
    variant = "primary",
    size = "md",
    disabled = false,
    className = "",
}) => {
    const baseStyles = "lg:text-lg font-bold rounded-lg transition duration-300 ease-in-out"

    const variantStyles = {
        primary: "bg-[#2323FE] text-white hover:bg-blue-600",
        secondary: "bg-gray-600 text-white hover:bg-gray-500",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-600 text-gray-600 hover:bg-gray-100",
    };

    const sizeStyles = {
        sm: "py-1 px-3 text-xs",
        md: "py-4 px-4 text-sm",
        lg: "py-3 px-6 text-lg",
    };
    return (
        <button onClick={onClick} disabled={disabled} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`} >
            {children}
        </button>
    )
}