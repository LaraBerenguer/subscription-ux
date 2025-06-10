import type { ReactNode } from "react";

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
    type: "button" | "submit";
}

const Button = ({ onClick, children, type }: ButtonProps) => {
    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default Button;