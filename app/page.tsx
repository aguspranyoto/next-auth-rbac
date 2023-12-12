import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { UserCard } from "@/components";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main>
      <h1 className="text-4xl text-center py-10">Home Page</h1>
      <div className="w-full">
        {session ? (
          <UserCard user={session?.user} />
        ) : (
          <div className="py-6">
            <div className="bg-white p-4 shadow-xl max-w-md mx-auto text-gray-700 rounded-lg ">
              <p className="text-center ">Please sign in</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
