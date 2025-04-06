import React from "react";
import Link from "next/link";

import SignInButtons from "@/components/SignInButton";
import LoginForm from "@/components/LogInForm";

// app/login/page.tsx

const page = async () => {
  return (
    <div className="bg-my-primary h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
        <div className="bg-black text-white p-6 text-center">
          <h1 className="text-2xl font-bold">LOGIN YOUR ACCOUNT</h1>
        </div>
        <LoginForm />
        <div className="h-[1px] bg-gray-300 my-5"></div>
        <div className="px-6">
          <SignInButtons />
        </div>
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
