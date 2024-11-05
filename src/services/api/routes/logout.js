import { logout, setMessage } from '../../../store';
import axiosInstance from '../config/axiosInstance';

export const handleLogout = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            const exit = await axiosInstance.post('/logout', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            dispatch(logout());
            dispatch(setMessage({ type: 'success', message: exit?.data?.message }));
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Erro ao realizar logout.';
            dispatch(setMessage({ type: 'error', message: errorMessage }));
        }
    }
};

