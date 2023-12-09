import React, { useEffect, useLayoutEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useUserAuth();
  const router = useRouter(); 
  // useEffect(() => {
 
  // }, [user, router]);

  // useLayoutEffect(() => {

  // }, [user, router] )
  if (!user) {
    // router.push("/login");
  }
  return children;
};

export default ProtectedRoute;
