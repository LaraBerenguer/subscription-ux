import Button from "../Button/Button";
import { getValidationCode } from "../../services/email-api";
import { useEmailContext } from "../../context/EmailContext";

interface MailFormProps {
    type: "button" | "submit";
}

const MailForm = ({ type }: MailFormProps) => {
    const {email, setEmail, setError, setLoading, code, setCode} = useEmailContext();

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleConnectUser = async () => {
        setLoading(true);
        setError(null);

        if (!email) { return }; //to do manage error

        try {
            const newCode = await getValidationCode(email);
            setCode(newCode);
            setLoading(false);
            return code;
        } catch (error) {
            const errorMessage = error instanceof Error ? error : new Error("Failed to send validation code");
            setError(errorMessage.message);
            setLoading(false);
            return null;
        }
    };

    return (
        <form id="mailInput">
            <div>
                <input type="email" id="email" value={email} onChange={handleEmail} required />
            </div>
            <Button type={type} onClick={handleConnectUser}>Connect</Button>
        </form>
    )
};

export default MailForm;