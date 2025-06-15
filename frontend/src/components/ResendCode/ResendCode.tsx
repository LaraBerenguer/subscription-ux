import { useState, useEffect } from 'react';
import { useEmailContext } from '../../hooks/useEmailContext';
import './resendCode.css';

const ResendCode = () => {
  const { email, sendVerificationCode, error: globalError } = useEmailContext();
  const [message, setMessage] = useState<string | null>(null);
  const [resendError, setResendError] = useState<string | null>(null);

  useEffect(() => {
    if (globalError) {
      setResendError(null);
      setMessage(null);
    }
  }, [globalError]);

  const handleResend = async () => {
    setResendError(null);
    setMessage(null);

    if (!email) {
      setResendError('Please go back and enter your mail');
      return;
    };

    try {
      const isCodeSent = await sendVerificationCode(email);
      if (isCodeSent) {
        setMessage('Verification code sent!');
      } else {
        setResendError('Please wait before requesting another code');
      }

    } catch (error) {
      setResendError(error instanceof Error ? error.message : 'Failed to send validation code');
    }
  };

  return (
    <div className="resend-email">
      <span className="resend-email--span">Didn't get an email?<button className="resend-email--button" onClick={handleResend} aria-label="Resend verification code">Resend Code</button></span>
      {message && !resendError && <div className="resend-mail--message">{message}</div>}
      {resendError && <div className="resend-mail--error" role='alert'>{resendError}</div>}
    </div>
  );
};

export default ResendCode;
