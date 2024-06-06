"use client";

import { useState, useContext, createContext, Dispatch, SetStateAction } from "react";

type UserEmailContextProps = {
  children: React.ReactNode;
};

type UserEmailContext = {
  userEmail: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
};

const UserEmailContext = createContext<UserEmailContext | null>(null);

export function useUserEmail() {
  const context = useContext(UserEmailContext);
  if (!context) throw new Error("useUserEmail must be used within a UserEmailContextProvider");

  return context;
}

export function UserEmailContextProvider({ children }: UserEmailContextProps) {
  const [userEmail, setUserEmail] = useState<string>("");

  return (
    <UserEmailContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserEmailContext.Provider>
  );
}
