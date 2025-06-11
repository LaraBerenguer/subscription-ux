import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface GoBackButtonProps {
    children?: ReactNode;    
    variant: "rounded" | "transparent";
}

const GoBackButton = ({ children, variant }: GoBackButtonProps) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button className={`go-back-button ${variant}`} onClick={handleGoBack}>
            {children}
        </button>
    );
};

export default GoBackButton;