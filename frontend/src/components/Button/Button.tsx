import type { ReactNode } from "react";
import "./button.css";

interface ButtonProps {
    onClick?: () => void;
    children: ReactNode;
    type: "button" | "submit";
    backgroundColor?: "primary" | "secondary";
}

const Button = ({ children, type, onClick, backgroundColor }: ButtonProps) => {
    return (
        <button className="button-component" type={type} onClick={onClick} style={{background: backgroundColor ? `var(--${backgroundColor})` : `var(--primary)`}} aria-label="Submit">
            {children}
        </button>
    );
};

export default Button;