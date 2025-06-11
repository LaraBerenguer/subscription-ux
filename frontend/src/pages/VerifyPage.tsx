import GoBackButton from "../components/Button/GoBackButton";
import CodeInput from "../components/Forms/CodeInput";
import List from "../components/List/List";
import { useEmailContext } from "../context/EmailContext";

const VerifyPage = () => {
    const { email } = useEmailContext();
    return (
        <main>
            <GoBackButton variant="transparent">Modify Mail</GoBackButton>
            <List />
            <h1>Get Verified!</h1>
            <h2>Enter the one-time code we sent to:</h2>
            <p>{email}</p>
            <CodeInput />
        </main>
    );
};

export default VerifyPage;