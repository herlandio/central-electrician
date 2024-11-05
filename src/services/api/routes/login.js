import { login, setMessage } from '../../../store';
import axiosInstance from '../config/axiosInstance';

export const handleLogin = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.post('/login', credentials);
            const { user, token } = response.data; 
            dispatch(login({ user, token })); 
            dispatch(setMessage({ type: 'success', message: response?.data?.message }));
        } catch (error) {
            const errorMessage = error.response?.data?.message;
            dispatch(setMessage({ type: 'error', message: errorMessage }));
        }
    };
};

