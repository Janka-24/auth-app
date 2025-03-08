import { currentUser } from "@/lib/auth";
import React from "react";

const Page = async () => {
    const user = await currentUser()
  return <div>
    {user?.email} {user?.name} {user?.role}
  </div>;
};

export default Page;
