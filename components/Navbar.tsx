import { auth, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-poppins">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} priority />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/blog/create">
                <span className="font-bold">Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="font-bold cursor-pointer">Log Out</span>
                </button>
              </form>

              {/* TODO: TO be Update */}
              <Link href="#">
                <span className="font-bold cursor-pointer">
                  {session?.user?.name}
                </span>
              </Link>
            </>
          ) : (
            <>
              <Link href="sign-in">
                <button className="font-bold cursor-pointer">Log In</button>
              </Link>
              <Link href="sign-up">
                <button className="font-bold cursor-pointer">
                  Get Started
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
