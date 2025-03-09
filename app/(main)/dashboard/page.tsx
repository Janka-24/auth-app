"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hook/use-current-user";
import { currentUser } from "@/lib/auth";
import { logOut } from "@/lib/logout";
import React from "react";

const Page = () => {
  const user = useCurrentUser();
  return (
    <Button onClick={async () => await logOut()} variant={"outline"}>
      {user?.email} {user?.name} {user?.role}
    </Button>
  );
};

export default Page;
