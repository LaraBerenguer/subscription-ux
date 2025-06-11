import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface GoBackButtonProps {
    children?: ReactNode;
    className?: string;
}

const GoBackButton = ({ children, className }: GoBackButtonProps) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button className={className} onClick={handleGoBack}>
            {children}
        </button>
    );
};

export default GoBackButton;