import { createSlice } from "@reduxjs/toolkit";

interface ThemeProps {
    isDark: boolean
}

const initialState: ThemeProps = {
    isDark: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDark = !state.isDark;
            document.documentElement.classList.toggle('dark', state.isDark);
        }
    }
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;