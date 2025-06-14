import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import PriceCard from "../components/Card/PriceCard";
import { useProductContext } from "../context/ProductsContext";
import TermsAndConditions from "../components/Terms/TermsAndConditions";
import { useEmailContext } from "../hooks/useEmailContext";
import { startTrial } from "../services/trial-api";
import "../styles/plansPage.css";

const PlansPage = () => {
    const { products, selectedPrice, error, setError } = useProductContext();
    const { userId, isUserIdAvailable } = useEmailContext();
    const navigate = useNavigate();

    const handleStartTrial = async () => {
        if (!isUserIdAvailable) {
            setError("User ID is not available. Please verify your email first.");
            return;
        }

        if (selectedPrice && userId) {
            try {
                await startTrial(userId);
                navigate("/success");
            } catch (error) {
                setError(error instanceof Error ? error.message : "Failed to start trial");
            }
            
        } else {
            setError("Please, select a plan");
        };
    };

    return (
        <main className="plans-page page-main">
            <section className="plans-page--title">
                <h1>Choose your plan</h1>
            </section>
            <section className="plans-page--cards">
                {products &&
                    Object.entries(products).map(([key, value]) => (
                        <PriceCard
                            key={key}
                            plan={key}
                            title={key === "year" ? "Annual" : "Monthly"}
                            price={value.price}
                            currency={value.currency}
                            trialDays={value.trial_days}
                        />
                    ))}
            </section>
            <section className="plans-page--cancel">
                <span><small>Cancel anytime.</small></span>
            </section>
            <section className="plans-page--button">
                {error && <span className="plans-page--error" role="alert">{error}</span>}
                <Button type="button" onClick={handleStartTrial} backgroundColor="secondary">Start my free trial!</Button>
            </section>
            <section className="plans-page--privacy">
                <TermsAndConditions />
            </section>
        </main>
    );
};

export default PlansPage;