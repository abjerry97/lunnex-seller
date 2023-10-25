import React from "react"; 
import { useUserAuth } from "../context/UserAuthContext";
import { useRouter } from "next/navigation";
const ProtectedRoute = ({ children }:any) => {
  const { user } = useUserAuth(); 
  const router = useRouter(); 
  if (!user) {
    return router.push("/login");
  }
  return children;
};

export default ProtectedRoute;