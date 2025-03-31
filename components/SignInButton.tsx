"use client";

import React from "react";
import { signIn } from "next-auth/react";

const SignInButtons = () => {
  return (
    <>
      <div className="px-6">
        {/* Google Sign-In */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="text-black border-black border-2 w-full py-3 rounded-lg font-bold hover:bg-pink-300 focus:ring-4 focus:ring-my-primary transition-all"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>

      <div className="px-6 mt-4">
        {/* GitHub Sign-In */}
        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="text-black border-black border-2 w-full py-3 rounded-lg font-bold hover:bg-pink-300 focus:ring-4 focus:ring-my-primary transition-all"
        >
          CONTINUE WITH GITHUB
        </button>
      </div>
    </>
  );
};

export default SignInButtons;
