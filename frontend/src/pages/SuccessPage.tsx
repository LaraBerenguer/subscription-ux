import { Link } from 'react-router-dom';
import '../styles/successPage.css';

const SuccessPage = () => {
  return (
    <main className="success-page page-main">
      <section className="success-page--title">
        <h1>Congrats! Your now a <span>subscriber</span>!</h1>
        <h2>Explore your membership now.</h2>
      </section>
      <section className="success-page--celebration">
        <img className="success-page-firework" src="/firework.svg" alt="Colored fireworks"></img>
      </section>
      <section className="success-page--link">
        <Link to={'/'}>To the beginning!</Link>
      </section>
    </main>
  );
};

export default SuccessPage;
