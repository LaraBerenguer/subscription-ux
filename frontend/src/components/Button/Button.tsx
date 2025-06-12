import type { ReactNode } from "react";
import "./button.css";

interface ButtonProps {
    //onClick: () => void;
    children: ReactNode;
    type: "button" | "submit";
}

const Button = ({ children, type }: ButtonProps) => {
    return (
        <button type={type}>
            {children}
        </button>
    );
};

export default Button;