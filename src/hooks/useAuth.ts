import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RootState, AppDispatch } from '../store';
import { getCurrentUser, logoutUser } from '../store/slices/authSlice';
import authService from '../services/authService';

export const useAuth = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { user, token, isLoading, error, isAuthenticated } = useSelector(
        (state: RootState) => state.auth
    );

    // Initialize auth state on mount
    useEffect(() => {
        const initializeAuth = async () => {
            if (authService.isAuthenticated() && !user) {
                dispatch(getCurrentUser());
            }
        };

        initializeAuth();
    }, [dispatch, user]);

    const logout = () => {
        dispatch(logoutUser());
    };

    return {
        user,
        token,
        isLoading,
        error,
        isAuthenticated,
        logout,
    };
};

export default useAuth; 