import { makeRequest } from "@/app/axios";
import { createContext, useContext, useState } from "react";

const userStoreContext = createContext<any | null>(null);

export function UserStoreContextProvider({ children }: any) { 
  const [store, setStore] = useState(null);
  const [storeName, setStoreName] = useState(null);

  function createStoreName(name: any) {
    setStoreName(name);
  }

  async function createStore(data: any) {
    const res = await makeRequest.post("stores", data);

    if (res.data && res.status < 400) {
      setStore(res.data);
      return res.data;
    } else throw new Error(res.data?.response?.message);
  }

  async function getStore() {
    const res = await makeRequest.get("stores");  
    if (res.data && res.status < 400) {
      setStore(res.data[res.data.length -1]);
      return res.data;
    }
    else throw new Error(res.data?.response?.message)

  }

  return (
    <userStoreContext.Provider
      value={{ store, createStore, storeName, createStoreName, getStore }}
    >
      {children}
    </userStoreContext.Provider>
  );
}

export function useUserStore() {
  return useContext(userStoreContext);
}
