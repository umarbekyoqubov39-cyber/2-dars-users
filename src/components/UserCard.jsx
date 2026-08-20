import React from "react";
import { users } from "@/data/Users";
import Link from "next/link";

function UserCard() {
  return (
    <div className="my-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <div
          key={user.id}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-md"
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-white">
            {user.firstName[0]}
          </div>

          <h2 className="text-xl font-bold">
            {user.firstName} {user.lastName}
          </h2>

          <p className="text-gray-500">{user.profession}</p>

          <div className="mt-4 space-y-2">
            <p>
              <strong>Age:</strong> {user.age}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>City:</strong> {user.city}
            </p>
            <h1 className="text-1xl text-orange-500">
              <Link href={`/users/${user.id}`}>
                {user.firstName} sayifasiga o&apos;tish
              </Link>
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserCard;
