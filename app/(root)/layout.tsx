import Navbar from "@/components/Navbar";
import { AuthProvider } from "../context/AuthContext";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AuthProvider>
        <main className="font-work-sans">
          <Navbar />

          {children}
        </main>
      </AuthProvider>
    </>
  );
}
