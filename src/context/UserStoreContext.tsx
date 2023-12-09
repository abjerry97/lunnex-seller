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
    } else return null;
  }
  async function getStore() {
    const res = await makeRequest.get("stores");
    if (res.data && res.status < 400) {
      setStore(res.data);
      return res.data;
    } else return null;
  }
  async function getUserStore() {
    const res = await makeRequest.get("stores/user");
    console.log(res);
    if (res.data && res.status < 400) {
      setStore(res.data);
      return res.data;
    } else return null;
  }
  async function checkUserStore() {
    const res = await makeRequest.get("stores/user/check");
    console.log(res);
    if (res.data && res.status < 400) {
      setStore(res.data);
      return res.data;
    } else return null;
  }

  return (
    <userStoreContext.Provider
      value={{
        store,
        createStore,
        storeName,
        createStoreName,
        getStore,
        getUserStore,
        checkUserStore
      }}
    >
      {children}
    </userStoreContext.Provider>
  );
}
export function useUserStore() {
  return useContext(userStoreContext);
}
