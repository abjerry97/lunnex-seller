'use client';

import { UserAuthContextProvider } from "../context/UserAuthContext";

export function Providers({ children }:any) {
  return ( 
      <UserAuthContextProvider>{children}</UserAuthContextProvider> 
  );
}