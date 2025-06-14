import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import './goBackButton.css';
import ArrowIcon from '../Icons/CaretIcon';
import FullArrowIcon from '../Icons/ArrowIcon';

interface GoBackButtonProps {
    children?: ReactNode;
    variant: 'rounded' | 'transparent';
}

const GoBackButton = ({ children, variant }: GoBackButtonProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className={`go-back-button ${variant}`} onClick={handleGoBack} aria-label={children ? 'Modify Email' : 'Go back'}>
      {children ? children : variant === 'rounded' ? <ArrowIcon /> : <div className="go-back-button--left"><FullArrowIcon />Modify Email</div>}
    </button>
  );
};

export default GoBackButton;
