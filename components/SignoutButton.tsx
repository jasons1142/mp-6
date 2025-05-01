"use client";

import { signOut } from "next-auth/react";

export default function SignoutButton() {
    return (
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-blue-500 underline"
        >
          Sign out
        </button>
    );
}