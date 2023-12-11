import React, { useEffect, useLayoutEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useUserAuth();
  const router = useRouter(); 
  // useEffect(() => {
 
  // }, [user, router]);

  useLayoutEffect(() => {
    const authenticated = !!user && !!user.uid;
    if (!authenticated) {
      router.push("/login");
    }
  }, [user, router] )

  return children;
};

export default ProtectedRoute;
