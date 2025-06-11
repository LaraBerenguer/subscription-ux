import CodeInput from "../components/Forms/CodeInput";
import { useEmailContext } from "../context/EmailContext";

const VerifyPage = () => {
    const { email } = useEmailContext();
    return (
        <main>
            <h1>Get Verified!</h1>
            <h2>Enter the one-time code we sent to:</h2>
            <p>{email}</p>
            <CodeInput />
        </main>
    );
};

export default VerifyPage;