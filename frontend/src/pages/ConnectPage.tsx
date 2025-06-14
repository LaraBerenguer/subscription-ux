import MailForm from "../components/Forms/MailForm";
import List from "../components/List/List";
import TermsOfService from "../components/Terms/TermsOfService";
import "../styles/connectPage.css";

const ConnectPage = () => {
    return (
        <main className="connect-page page-main">
            <section className="connect-page--list">
                <div className="connect-page--benefits">
                    <List />
                </div>
                <div className="connect-page--terms">
                    <TermsOfService />
                </div>
            </section>
            <section className="connect-page--form">
                <section className="connect-page--title">
                    <h1>Connect your account</h1>
                    <h2>...and unlock your benefits!</h2>
                </section>
                <div className="connect-page--input">
                    <MailForm type="submit" />
                </div>
            </section>
        </main>
    );
};

export default ConnectPage;