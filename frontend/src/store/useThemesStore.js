import {create} from 'zustand';
export const useThemesStore = create((set) => ({
    theme: localStorage.getItem("chat-theme") || "coffee" ,
    setTheme: (theme) => {
        localStorage.setItem('theme', theme);
        set({ theme });
    },
}));