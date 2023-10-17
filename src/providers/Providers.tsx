"use client";

import { UserStoreContextProvider } from "@/context/UserStoreContext";
import { UserAuthContextProvider } from "../context/UserAuthContext";

export function Providers({ children }: any) {
  return (
    <UserAuthContextProvider>
      <UserStoreContextProvider>{children}</UserStoreContextProvider>
    </UserAuthContextProvider>
  );
}
