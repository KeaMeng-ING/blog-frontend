import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="auth-layout">
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
