import Button from "../Button/Button";
import { useEmailContext } from "../../context/EmailContext";
import { useNavigate } from "react-router-dom";

interface MailFormProps {
    type: "button" | "submit";
}

const MailForm = ({ type }: MailFormProps) => {
    const { email, setEmail, error, setError, setLoading, sendVerificationCode } = useEmailContext();
    const navigate = useNavigate();

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        console.log("email: ", email)
    };

    const handleConnectUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!email) {
            setError("Please enter an email address");
            setLoading(false);
            return;
        };

        try {
            const isCodeSent = await sendVerificationCode(email);
            if (isCodeSent) {
                navigate("/verify");
            }
            setLoading(false);
        } catch (error) {
            console.error("Error during verification:", error);
            setLoading(false);
        }
    };

    return (
        <form id="mailInput" onSubmit={handleConnectUser}>
            <div>
                <input type="email" id="email" value={email} onChange={handleEmail} required />
            </div>
            {error && <div>{error}</div>}
            <Button type={type}>Connect</Button>
        </form>
    )
};

export default MailForm;