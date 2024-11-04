import { login, setError } from '../../../store';
import axiosInstance from '../config/axiosInstance';

export const handleLogin = async (credentials) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.post('/login', credentials);
            dispatch(login(response.data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Erro de login. Verifique suas credenciais.';
            dispatch(setError(errorMessage));
        }
    }
};
