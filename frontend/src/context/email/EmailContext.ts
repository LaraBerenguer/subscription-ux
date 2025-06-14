import { createContext } from 'react';
import type { UserId } from '../../types/types';

interface EmailContextProps {
    sendVerificationCode: (email: string) => Promise<boolean>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string | null;
    showError: (message: string) => void;
    clearError: () => void;
    email: string | undefined;
    setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
    codeSent: boolean;
    setCodeSent: React.Dispatch<React.SetStateAction<boolean>>;
    userId: UserId | undefined;
    setUserId: React.Dispatch<React.SetStateAction<UserId | undefined>>;
    isSubscribed: boolean;
    setIsSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EmailContext = createContext<EmailContextProps | undefined>(undefined);
