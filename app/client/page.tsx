"use client";
// Remember you must use an AuthProvider for
// client components to useSession
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { UserCard } from "@/components";

export default function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  return (
    <div className="w-full">
      <h1 className="text-4xl text-center py-10">Client Page</h1>
      <UserCard user={session?.user} />
    </div>
  );
}
