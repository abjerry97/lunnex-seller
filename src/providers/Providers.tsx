"use client";

import { UserStoreContextProvider } from "@/context/UserStoreContext";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export function Providers({ children }: any) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <UserAuthContextProvider>
      <UserStoreContextProvider>{children}</UserStoreContextProvider>
    </UserAuthContextProvider>
    </QueryClientProvider>
  );
}
