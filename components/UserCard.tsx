import Image from "next/image";
import React from "react";
import type { User } from "next-auth";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  const greeting = user?.name ? (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg text-xl text-gray-700">
      <div>
        {user?.email ? (
          <p>Hello {user?.name}! you are sign in with github</p>
        ) : (
          <p>Hello {user?.name}! you are sign in with credentials</p>
        )}
      </div>
    </div>
  ) : null;
  const emailDisplay = user?.email ? (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg text-xl text-gray-700">
      <p>{user?.email}</p>
    </div>
  ) : null;
  const userImage = user?.image ? (
    <div className="flex justify-center">
      <Image
        className="rounded-full"
        src={user?.image}
        alt="user image"
        width={50}
        height={50}
      />
    </div>
  ) : null;

  return (
    <div className="py-6">
      <div className="bg-white p-4 shadow-xl max-w-md mx-auto text-gray-700 rounded-lg ">
        {greeting}
        {emailDisplay}
        {userImage}
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
}

export default UserCard;
