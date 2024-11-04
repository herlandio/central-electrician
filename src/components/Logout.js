import { useDispatch } from 'react-redux';
import { handleLogout } from '../services/api/routes/logout';

const Logout = () => {
    const dispatch = useDispatch();
    dispatch(handleLogout());
};

export default Logout;
