const PriceCard = () => {
    const isChecked = true;
    return (
        <div className="card-main">
            <div className={`card ${isChecked ? 'selected' : ''}`}>
                <div className="card--title">
                    <input
                        type="checkbox"                        
                    />
                    <h2 >{/*title*/}Anually</h2>
                </div>
                <div className="card--price-card">
                    <div className="card--price-wrapper">
                        <p className="card--price-tag">USD</p>
                        <p className="card--price-wrapper-price">
                            {/*price*/}326
                            <small>Billed anually/monthly</small>
                        </p>
                    </div>
                    <div className="card--trial-days">
                        <small>{/*trialDays*/}7-day free trial</small>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default PriceCard;