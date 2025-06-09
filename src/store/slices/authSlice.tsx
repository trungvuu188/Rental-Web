import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, LoginRequest, RegisterRequest, AuthResponse } from "../../types/auth";
import authService from "../../services/authService";

interface AuthState {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    token: localStorage.getItem('token'),
    isLoading: false,
    error: null,
    isAuthenticated: !!localStorage.getItem('token'),
};

// Async thunks
export const loginUser = createAsyncThunk<
    AuthResponse,
    LoginRequest,
    { rejectValue: string }
>(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await authService.login(credentials);
            return response;
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Login failed');
        }
    }
);

export const registerUser = createAsyncThunk<
    AuthResponse,
    RegisterRequest,
    { rejectValue: string }
>(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await authService.register(userData);
            return response;
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Registration failed');
        }
    }
);

export const logoutUser = createAsyncThunk<
    void,
    void,
    { rejectValue: string }
>(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await authService.logout();
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Logout failed');
        }
    }
);

export const getCurrentUser = createAsyncThunk<
    User | null,
    void,
    { rejectValue: string }
>(
    'auth/getCurrentUser',
    async (_, { rejectWithValue }) => {
        try {
            const user = await authService.getCurrentUser();
            return user;
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Failed to get user');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        clearAuth: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        // Login cases
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Login failed';
                state.isAuthenticated = false;
            })
            // Register cases
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Registration failed';
                state.isAuthenticated = false;
            })
            // Logout cases
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.token = null;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Logout failed';
                // Even if logout fails, clear the auth state
                state.user = null;
                state.token = null;
                state.isAuthenticated = false;
            })
            // Get current user cases
            .addCase(getCurrentUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCurrentUser.fulfilled, (state, action: PayloadAction<User | null>) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = !!action.payload;
            })
            .addCase(getCurrentUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to get user';
                state.isAuthenticated = false;
            });
    },
});

export const { clearError, clearAuth } = authSlice.actions;

export default authSlice.reducer;