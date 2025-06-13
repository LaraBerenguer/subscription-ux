import { useProductContext } from "../../context/ProductsContext";
import "./priceCard.css";

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
        <div className={`card ${isChecked ? 'selected' : ''}`}>
            <div className="card--header">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheck}
                    className="card--checkbox"
                />
                <h2 >{title}</h2>
            </div>
            <div className="card--responsive">
                <div className="card--body">
                    <div className="card--price">
                        <span className="card--price-tag">{currency === "USD" ? "$" : ""}</span>
                        <span className="card--price-value">{price} </span>
                        <span className="card--price-period">{plan === "year" ? " /year" : " /month"}</span>
                    </div>
                    <p className="card--billed">Billed {plan === "year" ? "annually" : "monthly"}</p>
                </div>
                <p className="card--trial"><small>{trialDays}-day free trial</small></p>
            </div>
        </div>
    )
};

export default PriceCard;