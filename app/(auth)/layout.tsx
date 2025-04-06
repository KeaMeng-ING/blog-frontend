import { ReactNode } from "react";
import { AuthProvider } from "@/app/context/AuthContext";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="auth-layout">
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};

export default AuthLayout;
