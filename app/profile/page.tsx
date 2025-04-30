import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/signin");
    }

    const { user } = session;

    return (
        <main>
            <div>
                <h1>Your Information</h1>
                {/*{user?.image && (
                    <Image
                        src = {user.image}
                        alt = "Avatar"
                        width = {100}
                        height = {100}
                    />
                )}*/}
                <p className="text-xl font-medium">{user?.name || user?.email}</p>
                <p className="text-gray-500">Signed in with: GitHub</p>
            </div>
        </main>
    )
}