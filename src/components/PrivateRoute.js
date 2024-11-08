import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return element;
};

PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired,
};

export default PrivateRoute;
