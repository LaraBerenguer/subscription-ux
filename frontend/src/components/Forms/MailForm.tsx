import Button from "../Button/Button";

interface MailFormProps {
    onClick: () => void;
    type: "button" | "submit";
}

const MailForm = ({ onClick, type }: MailFormProps) => {
    return (
        <form id="mailInput">
            <div>
                <input type="email" id="email" required />
            </div>
            <Button type={type} onClick={onClick}>Connect</Button>
        </form>
    )
};

export default MailForm;