import Button from "../components/Button/Button";
import PriceCard from "../components/Card/PriceCard";

const PlansPage = () => {  
    return (
        <main className="plans-page">
            <section className="plans-page--title">
                <h1>Choose your plan</h1>
            </section>
            <section className="plans-page--cards">
                <PriceCard/>
                <span><small>Cancel anytime.</small></span>
            </section>
            <section className="plans-page--button">
                <Button type="button">Start my free trial!</Button>
            </section>
            <section className="plans-page--privacy">
                {/*Terms and conditions component*/}
            </section>
        </main>
    );
};

export default PlansPage;