import "./checkOffers.css";

const CheckOffers = () => {    

    const handleCheck = () => {        
        //mail check context
    };

    return (
        <div className="offers-wrapper">
            <input
                type="checkbox"
                
                onChange={handleCheck}
                className="offers--checkbox"
                tabIndex={0}
            />
            <span>Send me Offers, News and Fun Stuff!</span>
        </div>
    );
};

export default CheckOffers;