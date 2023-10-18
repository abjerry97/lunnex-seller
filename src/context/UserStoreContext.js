import { createContext, useContext, useEffect, useState } from 'react'

const userStoreContext = createContext()

export function UserStoreContextProvider({ children }) {
   let initialStore = {}
   const [store, setStore] = useState(initialStore) 
  function createStore(store) { 
    setStore(store) 
    
    localStorage.setItem("userStore",JSON.stringify(store))
    return store
  }

  function createStoreName(store, name) {
    if (!store) return initStoreWithData({ name })

    return addDataToStore(store, { name })
  }
  function initStoreWithData(data) {
    createStore(data) 
    return data
  }
  function addDataToStore(store, data) {  
    const { ...store_ } = store
    const { ...new_ } = data
    const newstore = { ...store_, ...new_ } 
    updateStore(newstore)
    return store
  }
  function updateStore(newStore) {  
    setStores(newStore) 
       localStorage.setItem("userStore",JSON.stringify(newStore))

    return newStore
  }

  useEffect(() => { 
      // alert('In userstorecontext use effect')
      if (typeof window !== 'undefined') {
      initialStore = JSON.parse(localStorage.getItem("userStore"))
      }
  //  localStorage.setItem("userStores",JSON.stringify(stores))
   
  //  localStorage.removeItem("userStores") 

    return () => {
         localStorage.removeItem("userStores") 
    }
  }, [store])

  return (
    <userStoreContext.Provider value={{ store, createStoreName ,addDataToStore}}>
      {children}
    </userStoreContext.Provider>
  )
}

export function useUserStore() {
  return useContext(userStoreContext)
}
