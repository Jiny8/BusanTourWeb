import { create } from "zustand";

export const useAuthStore = create((set) => ({
  accessToken: "dev-token",    
  user: { id: "테스트" },       
  isAuthenticated: true,

  setAccessToken: (token) =>
    set({
      accessToken: token,
      isAuthenticated: !!token,
    }),

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  logout: () =>
    set({
      accessToken: null,
      user: null,
      isAuthenticated: false,
    }),
}));
