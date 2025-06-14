import CodeInput from '../components/Forms/CodeInput';
import List from '../components/List/List';
import { useEmailContext } from '../hooks/useEmailContext';
import '../styles/verifyPage.css';

const VerifyPage = () => {
  const { email } = useEmailContext();
  return (
    <main className="verify-page page-main">
      <section className="verify-page--list">
        <div className="verify-page--benefits">
          <List />
        </div>
      </section>
      <section className="verify-page--form">
        <section className="verify-page--title">
          <h1>Get Verified!</h1>
          <h2>Enter the one-time code we sent to:</h2>
          <p>{email}</p>
        </section>
        <div className="verify-page--input">
          <CodeInput />
        </div>
      </section>
    </main>
  );
};

export default VerifyPage;
