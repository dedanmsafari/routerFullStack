import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const JWT_KEY = "user-token";

type AuthProps = {
  token: string | null;
  initialized: boolean;
  onLogin: (email: string, password: string) => Promise<any>;
  onLogout: () => Promise<void>;
  onRegister: (email: string, password: string) => Promise<any>;
};

const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await SecureStore.getItemAsync(JWT_KEY);
      if (storedToken) {
        setToken(storedToken);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${storedToken}`;
      }
      setInitialized(true);
    };

    loadToken();
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/auth`, { email, password });
      setToken(result.data.token);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.token}`;
      await SecureStore.setItemAsync(JWT_KEY, result.data.token);
      return result;
    } catch (error: any) {
      return { error: true, msg: error.response.data.message };
    }
  };

  const handleLogOut = async () => {
    setToken(null);
    await SecureStore.deleteItemAsync(JWT_KEY);
    axios.defaults.headers.common["Authorization"] = "";
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/user`, { email, password });

      return result;
    } catch (error: any) {
      return { error: true, msg: error.response.data.message };
    }
  };

  const value = {
    token,
    initialized,
    onLogin: handleLogin,
    onLogout: handleLogOut,
    onRegister: handleRegister,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
