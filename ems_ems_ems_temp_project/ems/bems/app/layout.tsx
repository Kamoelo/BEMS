import type { Metadata } from "next";
import "./globals.css";
import ClientSessionProvider from "../components/ClientSessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "BEMS - Business Employment Management System",
  description: "Simple Next.js front-end with Employee CRUD",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions as any);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 antialiased">
        {/* Pass the server session to the client provider to avoid UI flash */}
        <ClientSessionProvider initialSession={session}>{children}</ClientSessionProvider>
      </body>
    </html>
  );
}
