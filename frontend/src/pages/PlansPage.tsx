import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import PriceCard from "../components/Card/PriceCard";
import { useProductContext } from "../context/ProductsContext";
import TermsAndConditions from "../components/Terms/TermsAndConditions";
import "../styles/plansPage.css";

const PlansPage = () => {
    const { products, selectedPrice, error, setError } = useProductContext();
    const navigate = useNavigate();

    const handleStartTrial = () => {
        if (selectedPrice) {
            navigate("/success");
        } else {
            setError("Select a plan")
        };
    };

    return (
        <main className="plans-page">
            <section className="plans-page--title">
                <h1>Choose your plan</h1>
            </section>
            <section className="plans-page--cards">
                {products &&
                    Object.entries(products).map(([key, value]) => (
                        <div className={`plans-page--card`}>
                            <PriceCard
                                key={key}
                                plan={key}
                                title={key === "year" ? "Annual" : "Monthly"}
                                price={value.price}
                                currency={value.currency}
                                trialDays={value.trial_days}
                            />
                        </div>
                    ))}
            </section>
            <section className="plans-page--cancel">
                <span><small>Cancel anytime.</small></span>
            </section>
            <section className="plans-page--button">
                {error && <span>{error}</span>}
                <Button type="button" onClick={handleStartTrial}>Start my free trial!</Button>
            </section>
            <section className="plans-page--privacy">
                <TermsAndConditions />
            </section>
        </main>
    );
};

export default PlansPage;