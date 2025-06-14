import { useMemo, useState, useEffect } from 'react';
import type { UserId } from '../../types/types';
import { EmailContext } from './EmailContext';
import { useEmailActions } from '../../hooks/useEmailActions';

export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [errorId, setErrorId] = useState<number>(0);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [codeSent, setCodeSent] = useState<boolean>(false);
  const [userId, setUserId] = useState<UserId>();
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const { sendVerificationCode } = useEmailActions({setLoading, setError, setCodeSent});

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorId, error]);

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
    setIsSubscribed,
  }), [loading, error, email, codeSent, userId, isSubscribed]);

  return (
    <EmailContext.Provider value={value}>
      {children}
    </EmailContext.Provider>
  );
};
