import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/Icon.svg';
import "./style.scss";

function Logo(props) {
    return (
        <Link to={"/"}>
            <div className="logo">
                <img src={logo} alt="Loading" className="logo__img" />
                <h1 className="logo__title">grocerymart</h1>
            </div>
        </Link>
    );
}

export default Logo;