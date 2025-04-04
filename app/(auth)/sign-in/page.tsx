import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import SignInButtons from "@/components/SignInButton";

const page = async () => {
  return (
    <div className="bg-my-primary h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
        <div className="bg-black text-white p-6 text-center">
          <h1 className="text-2xl font-bold">LOGIN YOUR ACCOUNT</h1>
        </div>

        <div className="grid w-full px-6 gap-4 mt-7">
          <div className="grid gap-2">
            <Label className="font-bold" htmlFor="email">
              Email
            </Label>
            <Input type="email" id="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label className="font-bold mt-2" htmlFor="password">
              Password
            </Label>
            <Input type="password" id="password" placeholder="password" />
          </div>
          <Link href="/forgot-password">
            <p className="text-my-primary font-bold text-right my-1">
              Forgot password?
            </p>
          </Link>
        </div>

        <div className="px-6 mt-4">
          <button
            type="submit"
            className="bg-black text-white w-full py-3 rounded-lg font-bold hover:bg-gray-800 focus:ring-4 focus:ring-my-primary transition-all"
          >
            LOG IN
          </button>
        </div>

        <div className="h-[1px] bg-gray-300 my-5"></div>

        <SignInButtons />

        <p className="text-center m-5 font-bold">
          Don&apos;t have an account?
          <Link href="/sign-up">
            <span className="text-my-primary cursor-pointer"> Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
