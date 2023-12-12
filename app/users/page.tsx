import { UserCard } from "@/components";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import React from "react";

async function Users() {
  const session = await getServerSession(options);
  return (
    <div className="w-full">
      <h1 className="text-4xl text-center py-10">Users Page</h1>
      <UserCard user={session?.user} />
    </div>
  );
}

export default Users;
