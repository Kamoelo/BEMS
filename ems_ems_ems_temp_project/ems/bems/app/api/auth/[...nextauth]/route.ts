import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "@/lib/users"; // <- local data source

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Simple lookup in your data source
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
          // Return only safe info (no password)
          return { id: user.id, name: user.name, email: user.email };
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login", // matches your existing login page
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
