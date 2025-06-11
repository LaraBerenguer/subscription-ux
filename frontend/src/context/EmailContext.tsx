import { createContext, useContext, useMemo, useState } from "react";
import { getValidationCode } from "../services/email-api";

interface EmailContextProps {
    sendVerificationCode: (email: string) => Promise<boolean>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    email: string | undefined;
    setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
    codeSent: boolean;
    setCodeSent: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EmailContext = createContext<EmailContextProps | undefined>(undefined);

export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>("");
    const [email, setEmail] = useState<string | undefined>("");
    const [codeSent, setCodeSent] = useState<boolean>(false);

    const sendVerificationCode = async (email: string) => {
        setLoading(true);
        setError(null);

        if (!email) {
            setError("Please enter an email address");
            setLoading(false);
            return false;
        };

        try {
            const isCodeSent: boolean = await getValidationCode(email);
            setCodeSent(isCodeSent);
            setLoading(false);
            return isCodeSent;
        } catch (error) {
            const errorMessage = error instanceof Error ? error : new Error("Failed to send validation code");
            setError(errorMessage.message);
            setLoading(false);
            return false;
        }
    };

    const value = useMemo(() => ({
        sendVerificationCode,
        loading,
        setLoading,
        error,
        setError,
        email,
        setEmail,
        codeSent,
        setCodeSent
    }), [loading, error, email, codeSent]);

    return (
        <EmailContext.Provider value={value}>
            {children}
        </EmailContext.Provider>
    );
};

export const useEmailContext = () => {
    const context = useContext(EmailContext);
    if (!context) {
        throw new Error('useEmailContext must be used within an EmailProvider');
    }
    return context;
};