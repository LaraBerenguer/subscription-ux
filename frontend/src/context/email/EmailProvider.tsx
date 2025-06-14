import { useMemo, useState } from 'react';
import type { UserId } from '../../types/types';
import { EmailContext } from './EmailContext';
import { useEmailActions } from '../../hooks/useEmailActions';
import { useError } from '../../hooks/useError';

export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [loading, setLoading] = useState<boolean>(false);  
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [codeSent, setCodeSent] = useState<boolean>(false);
  const [userId, setUserId] = useState<UserId>();
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);  
  const { sendVerificationCode } = useEmailActions({setLoading, setCodeSent});
  const {error, showError, clearError} = useError();

  const value = useMemo(() => ({
    sendVerificationCode,
    loading,
    setLoading,
    error,
    showError,
    clearError,
    email,
    setEmail,
    codeSent,
    setCodeSent,
    setUserId,
    userId,
    isSubscribed,
    setIsSubscribed,
  }), [loading, error, email, codeSent, userId, isSubscribed, showError, clearError]);

  return (
    <EmailContext.Provider value={value}>
      {children}
    </EmailContext.Provider>
  );
};
