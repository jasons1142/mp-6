"use client";

import { signIn } from "next-auth/react";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-black">OAuth Demo</h1>
        <p className="text-gray-500">Click below to sign in</p>

        <button
          onClick={() => signIn("github", { callbackUrl: "/profile"})}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Sign in with GitHub
        </button>
      </div>
    </main>
  );
}