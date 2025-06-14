import { getValidationCode } from '../services/email-api';
import { useError } from './useError';

interface UseEmailActions {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setCodeSent: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useEmailActions = ({ setLoading, setCodeSent }: UseEmailActions) => {
    const { showError, clearError } = useError();

    const sendVerificationCode = async (email: string) => {
        setLoading(true);
        clearError();

        if (!email) {
            showError('Please enter an email address');
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
            showError(errorMessage.message);
            setLoading(false);
            return false;
        }
    };
    return {
        sendVerificationCode
    }
};
