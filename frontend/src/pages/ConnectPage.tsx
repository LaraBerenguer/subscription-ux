import MailForm from "../components/Forms/MailForm";
import List from "../components/List/List";
import "../styles/connectPage.css";
//import Form from "../components/Button/Button";
//import CheckOffers from "../components/Button/Button";

const ConnectPage = () => {
    return (
        <main className="connect-page">
            <section className="list-section">
                <List />
                {/*Terms and conditions*/}
            </section>
            <section className="form-section">
                <section className="title-container">
                    <h1>Connect your account</h1>
                    <h2>...and unlock your benefits!</h2>
                </section>
                <div className="form-container">
                    <MailForm type="submit" />
                </div>
            </section>
        </main>
    );
};

export default ConnectPage;