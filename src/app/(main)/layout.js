import React from "react";
import Navbar from "@/components/NAvbar";
import Users from "@/app/users/page";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Users />
    </div>
  );
}
