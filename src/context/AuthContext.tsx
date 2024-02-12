import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLoginMutation, useRegisterMutation } from '../service/authApi';
import { useNavigate } from 'react-router-dom';

interface AuthProps {
  children?: ReactNode;
}

interface AuthValues {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthValues);

export const AuthProvider = ({ children }: AuthProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuth(false);
    localStorage.clear();
    navigate('/login', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
