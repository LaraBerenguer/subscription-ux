import { getValidationCode } from '../services/email-api';

interface UseEmailActions {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    setCodeSent: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useEmailActions = ({setLoading, setError, setCodeSent}: UseEmailActions) => {

    const sendVerificationCode = async (email: string) => {
        setLoading(true);
        setError(null);

        if (!email) {
            setError('Please enter an email address');
            setLoading(false);
            return false;
        };

        try {
            const isCodeSent: boolean = await getValidationCode(email);
            setCodeSent(isCodeSent);
            setLoading(false);
            return isCodeSent;
        } catch (error) {
            const errorMessage = error instanceof Error ? error : new Error('Failed to send validation code');
            setError(errorMessage.message);
            setLoading(false);
            return false;
        }
    };
    return {
        sendVerificationCode
    }
};
