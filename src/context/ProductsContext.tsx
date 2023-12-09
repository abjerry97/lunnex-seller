import { makeRequest } from "@/app/axios";
import { createContext, useContext, useState } from "react";

const productsContext = createContext<any | null>(null);

export function ProductsContextProvider({ children }: any) {
  const [products, setProducts] = useState(null);

  const [product, setProduct] = useState(null);

  async function createProduct(data: any) {
    try {
      const res = await makeRequest.post("products", data);

      if (res.data && res.status < 400) {
        setProducts(res.data);
        return res.data;
      } else return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async function getProducts() {
    const res = await makeRequest.get("products");
    if (res.data && res.status < 400) {
      setProducts(res.data);
      return res.data;
    } else return null;
  }
  async function getUserProducts() {
    const res = await makeRequest.get("products/user");
    if (res.data && res.status < 400) {
      setProducts(res.data);
      return res.data;
    } else return null;
  }
  async function getProduct(id: string) {
    const res = await makeRequest.get(`products/${id}`);
    if (res.data && res.status < 400) {
      setProduct(res.data);
      return res.data;
    } else return null;
  }

  return (
    <productsContext.Provider
      value={{
        product,
        products,
        getProducts,
        createProduct,
        getProduct,
        getUserProducts,
      }}
    >
      {children}
    </productsContext.Provider>
  );
}

export function useProductsStore() {
  return useContext(productsContext);
}
