import { users } from "@/data/Users";
import Link from "next/link";

export default async function UserPage({ params }) {
  const { id } = await params;

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">User topilmadi</h1>

          <Link
            href="/users"
            className="inline-block mt-5 px-5 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
          >
            Users ga qaytish
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/users"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-600 mb-6"
        >
          ← Users
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-36 bg-gradient-to-r from-yellow-600 to-amber-600"></div>

          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-end gap-5 -mt-16">
              <div className="w-32 h-32 rounded-full bg-yellow-500 border-4 border-white shadow-lg flex items-center justify-center text-5xl font-bold text-white">
                {user.firstName[0]}
                {user.lastName[0]}
              </div>

              <div className="pb-2">
                <h1 className="text-3xl font-bold text-gray-800">
                  {user.firstName} {user.lastName}
                </h1>

                <p className="text-gray-500 mt-1">{user.profession}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-500">Age</p>
                <p className="text-xl font-semibold mt-1">{user.age} years</p>
              </div>

              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-500">City</p>
                <p className="text-xl font-semibold mt-1">{user.city}</p>
              </div>

              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-semibold mt-1 break-all">
                  {user.email}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-500">Profession</p>
                <p className="text-lg font-semibold mt-1">{user.profession}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <button className="px-5 py-2.5 rounded-lg bg-yellow-600 text-white font-medium hover:bg-yellow-700 transition">
                Edit User
              </button>

              <button className="px-5 py-2.5 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition">
                Delete User
              </button>

              <Link
                href="/users"
                className="px-5 py-2.5 rounded-lg border border-gray-300 font-medium hover:bg-gray-100 transition"
              >
                Back to Users
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
