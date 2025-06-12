import GoBackButton from "../components/Button/GoBackButton";
import CodeInput from "../components/Forms/CodeInput";
import List from "../components/List/List";
import { useEmailContext } from "../context/EmailContext";
import "../styles/verifyPage.css";

const VerifyPage = () => {
    const { email } = useEmailContext();
    return (
        <main className="verify-page">
            <div className="go-back-button">
                <GoBackButton variant="transparent">Modify Mail</GoBackButton>
            </div>
            <div className="verify-page--content">
                <section className="verify-page--list">
                    <List />
                </section>
                <section className="verify-page--form">
                    <div className="verify-page--title">
                        <h1>Get Verified!</h1>
                        <h2>Enter the one-time code we sent to:</h2>
                        <p>{email}</p>
                    </div>
                    <div className="verify-page--input">
                        <CodeInput />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default VerifyPage;