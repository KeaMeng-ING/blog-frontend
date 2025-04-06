// components/LoginForm.tsx
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../app/context/AuthContext"; // Corrected import path

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://blog-backend-l4jw.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Use router instead of redirect for client components
      console.log("Login successful", data);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.error("Login failed", error);
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid w-full px-6 gap-4 mt-7">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      <div className="grid gap-2">
        <Label className="font-bold" htmlFor="email">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label className="font-bold mt-2" htmlFor="password">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Link href="/forgot-password">
        <p className="text-my-primary font-bold text-right my-1">
          Forgot password?
        </p>
      </Link>
      <div>
        <button
          type="submit"
          className="bg-black text-white w-full py-3 rounded-lg font-bold hover:bg-gray-800 focus:ring-4 focus:ring-my-primary transition-all"
          disabled={isLoading}
        >
          {isLoading ? "LOGGING IN..." : "LOG IN"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
