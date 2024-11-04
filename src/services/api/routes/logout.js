import { logout, setError } from '../../../store';
import axiosInstance from '../config/axiosInstance';

export const handleLogout = () => {
    return async (dispatch) => {
        try {
            await axiosInstance.post('/logout');
            localStorage.removeItem('token');
            dispatch(logout());
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Erro ao realizar logout.';
            dispatch(setError(errorMessage));
        }
    }
};
