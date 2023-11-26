import React, { useEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return children;
};

export default ProtectedRoute;
