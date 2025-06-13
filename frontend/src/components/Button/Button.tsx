import type { ReactNode } from "react";
import "./button.css";

interface ButtonProps {
    onClick?: () => void;
    children: ReactNode;
    type: "button" | "submit";
}

const Button = ({ children, type, onClick }: ButtonProps) => {
    return (
        <button className="button-component" type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;