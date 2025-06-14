import { useState } from 'react';
import { useEmailContext } from '../../hooks/useEmailContext';
import './resendCode.css';

const ResendCode = () => {
  const { email, sendVerificationCode, setError } = useEmailContext();
  const [message, setMessage] = useState<string | null>(null);

  const handleResend = async () => {
    if (!email) {
      setError('Please go back and enter your mail');
      return;
    };

    try {
      const isCodeSent = await sendVerificationCode(email);
      if (isCodeSent) {
        setMessage('Verification code sent!');
      }

    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to send validation code');
    }
  };

  return (
    <div className="resend-email">
      <span>Didn't get an email?<button className="resend-email--button" onClick={handleResend} aria-label="Resend verification code">Resend Code</button></span>
      {message && <div className="resend-mail--message">{message}</div>}
    </div>
  );
};

export default ResendCode;
