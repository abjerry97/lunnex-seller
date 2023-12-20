import React, { useEffect, useLayoutEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: any) => {
  const { isAuthenticated } = useUserAuth();
  const router = useRouter(); 
  useEffect(() => {
    if (!isAuthenticated.current) {
      router.push("/login");
    }
  }, [ router]);
console.log(isAuthenticated)
  // useLayoutEffect(() => { 
 
  // }, [ router] )

  return children;
};

export default ProtectedRoute;
