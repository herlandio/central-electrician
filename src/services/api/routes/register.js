import { register, setError } from '../../../store';
import axiosInstance from '../config/axiosInstance';

export const handleRegister = async (userData) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.post('/register', userData);
            dispatch(register(response.data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Erro de registro. Verifique os dados informados.';
            dispatch(setError(errorMessage));
        }
    };
};
