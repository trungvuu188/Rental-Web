import { Link } from 'react-router-dom';
import './style.scss';

const Unauthorized = () => {
    return (
        <div className="unauthorized">
            <div className="unauthorized__content">
                <h1 className="unauthorized__title">403</h1>
                <h2 className="unauthorized__subtitle">Access Denied</h2>
                <p className="unauthorized__message">
                    You don't have permission to access this resource.
                </p>
                <div className="unauthorized__actions">
                    <Link to="/" className="btn btn--primary">
                        Go Home
                    </Link>
                    <Link to="/contact" className="btn btn--outline">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized; 