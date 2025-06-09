import Button from "../components/Button/Button";
import List from "../components/List/List";


const ConnectPage = () => {
    const handleConnectUser = () => {
        //connect user
    };

    return (
        <main>
            <List />
            <h1>Connect your account</h1>
            <h2>...and unlock your benefits!</h2>            
            <Button onClick={handleConnectUser}>Connect</Button>

        </main>
    );
};

export default ConnectPage;