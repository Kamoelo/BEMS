"use client";

import { SessionProvider } from "next-auth/react";

export default function ClientSessionProvider({
  children,
  initialSession,
}: {
  children: React.ReactNode;
  initialSession?: any;
}) {
  return <SessionProvider session={initialSession}>{children}</SessionProvider>;
}
