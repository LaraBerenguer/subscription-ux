import MailForm from "../components/Forms/MailForm";
import List from "../components/List/List";
//import Form from "../components/Button/Button";
//import CheckOffers from "../components/Button/Button";

const ConnectPage = () => {   
    return (
        <main>
            <List />
            <h1>Connect your account</h1>
            <h2>...and unlock your benefits!</h2>
            <MailForm type="submit"/>

        </main>
    );
};

export default ConnectPage;