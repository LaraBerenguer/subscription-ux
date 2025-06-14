import { useContext, useMemo, useState, useEffect } from "react";
import { getValidationCode } from "../services/email-api";
import type { UserId } from "../types/types";
import { EmailContext } from "./emailContext";



export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>("");
    const [errorId, setErrorId] = useState<number>(0);
    const [email, setEmail] = useState<string | undefined>("");
    const [codeSent, setCodeSent] = useState<boolean>(false);
    const [userId, setUserId] = useState<UserId>();
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

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

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 5000);
            return () => clearTimeout(timer)
        }
    }, [errorId]);

    const setErrorReset = (message: string) => {
        setError(message);
        setErrorId(prev => prev + 1);
    };

    const value = useMemo(() => ({
        sendVerificationCode,
        loading,
        setLoading,
        error,
        setError,
        setErrorReset,
        email,
        setEmail,
        codeSent,
        setCodeSent,
        setUserId,
        userId,
        isSubscribed,
        setIsSubscribed
    }), [loading, error, email, codeSent, userId]);

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

    return {
        ...context,
        userId: context.userId as UserId,
        isUserIdAvailable: !!context.userId
    };
};