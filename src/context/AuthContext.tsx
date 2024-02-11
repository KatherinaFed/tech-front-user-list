import { ReactNode, createContext } from 'react';

interface AuthProps {
  children?: ReactNode;
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: AuthProps) => {

  return (
    <AuthContext.Provider value={{  }}>
      {children}
    </AuthContext.Provider>
  );
};
