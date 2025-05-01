import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-50 p-8">
      <div className="flex flex-col items-center justify-center space-y-4 bg-white w-110 h-70 rounded-xl">
        <img
            src={session.user.image ?? "/default-avatar.png"}
            alt="User profile picture"
            className = "w-16 h-16 rounded-full max-auto"
        />
        <h1 className="text-2xl font-bold text-black">Welcome, {session.user.name}</h1>
        <p className="text-black">{session.user.email}</p>
        <a href="/api/auth/signout" className="text-blue-500 underline">Sign out</a>
      </div>
    </main>
  );
}