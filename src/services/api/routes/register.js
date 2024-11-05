import { register, setMessage } from '../../../store';
import axiosInstance from '../config/axiosInstance';

export const handleRegister = (userData) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.post('/register', userData);
            dispatch(register({ user: response?.data?.user }));
            dispatch(setMessage({ type: 'success', message: response?.data?.message }));
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Erro de registro. Verifique os dados informados.';
            dispatch(setMessage({ type: 'error', message: errorMessage }));
        }
    };
};
