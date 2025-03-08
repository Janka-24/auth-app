import React from "react";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const session = await auth();
  return;
  <SessionProvider>
    <div>{children}</div>
  </SessionProvider>;
};

export default Layout;
