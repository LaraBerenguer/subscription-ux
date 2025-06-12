import { useProductContext } from "../../context/ProductsContext";

interface PriceCardProps {
    plan: string;
    title: string;
    price: string;
    currency: string;
    trialDays: number;
}

const PriceCard = ({ plan, title, price, currency, trialDays }: PriceCardProps) => {
    const { selectedPrice, setSelectedPrice } = useProductContext();
    const isChecked = selectedPrice == plan;

    const handleCheck = () => {
        setSelectedPrice(isChecked ? null : plan);
    };

    return (
        <div className="card-main">
            <div className={`card ${isChecked ? 'selected' : ''}`}>
                <div className="card--title">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheck}
                        className="card--checkbox"
                    />
                    <h2 >{title}</h2>
                </div>
                <div className="card--price-card">
                    <div className="card--price-wrapper">
                        <p className="card--price-tag">{currency}</p>
                        <p className="card--price-wrapper-price">
                            {price}
                            <small>Billed anually/monthly</small>
                        </p>
                    </div>
                    <div className="card--trial-days">
                        <small>{trialDays}-day free trial</small>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default PriceCard;