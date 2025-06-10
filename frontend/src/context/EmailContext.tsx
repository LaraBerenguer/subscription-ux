import { createContext, useContext, useMemo, useState } from "react";
import { getValidationCode } from "../services/email-api";

interface EmailContextProps {
    sendVerificationCode: (email: string) => void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    email: string | undefined;
    setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
    code: string | null;
    setCode: React.Dispatch<React.SetStateAction<string | null>>;
};

export const EmailContext = createContext<EmailContextProps | undefined>(undefined);

export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>("");
    const [email, setEmail] = useState<string | undefined>("");
    const [code, setCode] = useState<string | null>("");

    const sendVerificationCode = async () => {
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

    const value = useMemo(() => ({
        sendVerificationCode,
        loading,
        setLoading,
        error,
        setError,
        email,
        setEmail,
        code,
        setCode
    }), [loading, error, email, code]);

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