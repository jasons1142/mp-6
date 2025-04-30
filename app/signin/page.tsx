"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <button
        onClick={() => signIn("github")}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Sign in with GitHub
      </button>
    </main>
  );
}