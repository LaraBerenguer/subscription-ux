import { useEmailContext } from "../../hooks/useEmailContext";
import "./checkOffers.css";

const CheckOffers = () => {  
    
    const {isSubscribed, setIsSubscribed} = useEmailContext();

    const handleCheck = () => {        
        setIsSubscribed(prev => !prev);
    };

    return (
        <div className="offers-wrapper">
            <input
                type="checkbox"
                aria-checked={isSubscribed}                
                onChange={handleCheck}
                className="offers--checkbox"
                tabIndex={0}
            />
            <label htmlFor="offers-checkbox">Send me Offers, News and Fun Stuff!</label>
        </div>
    );
};

export default CheckOffers;