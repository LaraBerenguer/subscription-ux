import CheckIcon from "../Icons/Check";
import "./list.css";

const List = () => {
    return (
        <div>
            <ul>
                <li className="li--with-background"><CheckIcon height="20px"/>Access to 100+ GAMES for FREE thanks to ads</li>
                <li><CheckIcon height="20px"/>Log In Across all your Devices</li>
                <li className="li--with-background"><CheckIcon height="20px"/>Skip the Line with Customer Support</li>
            </ul>
        </div>
    );
};

export default List;