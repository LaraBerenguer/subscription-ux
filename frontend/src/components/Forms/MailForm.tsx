import Button from "../Button/Button";
import { useEmailContext } from "../../hooks/useEmailContext";
import { useNavigate } from "react-router-dom";
import "./mailForm.css";
import CheckOffers from "../CheckOffers/CheckOffers";
import { emailValidation } from "../../utils/validation";

interface MailFormProps {
    type: "button" | "submit";
}

const MailForm = ({ type }: MailFormProps) => {
    const { email, setEmail, error, setError, setLoading, sendVerificationCode } = useEmailContext();
    const navigate = useNavigate();

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
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

        const value = email;
        const validatedEmail = emailValidation(value);
        if (validatedEmail) {
            setEmail(email);
        } else {
            setError("Please enter a valid email address")
            return;
        }

        try {
            const isCodeSent = await sendVerificationCode(email);
            if (isCodeSent) {
                navigate("/verify");
            }
            setLoading(false);
        } catch (error) {
            console.error("Error during verification:", error);
            setError(error instanceof Error ? error.message : "Failed to send validation code");
            setLoading(false);
        }
    };

    return (
        <form id="mailInput" onSubmit={handleConnectUser}>
            <div>
                <label htmlFor="email" hidden>Email Address</label>
                <input id="email" value={email} onChange={handleEmail} placeholder="Email Address" aria-invalid={Boolean(error)} aria-describedby={error ? "email-error" : undefined} />
            </div>
            <CheckOffers />
            {error && <div id="email-error" className="error-message" role="alert">{error}</div>}
            <Button type={type} backgroundColor="primary">Connect</Button>
        </form>
    )
};

export default MailForm;