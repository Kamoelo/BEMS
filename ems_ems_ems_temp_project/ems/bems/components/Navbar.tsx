"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  // Links visible to unauthenticated users
  const publicLinks = [
    { href: "/", label: "Home" },
    { href: "/login", label: "Login" },
  ];

  // Links visible to authenticated users (in addition to Home)
  const privateLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/management", label: "Management" },
    { href: "/attendance", label: "Attendance" },
    { href: "/payroll", label: "Payroll" },
    { href: "/reports", label: "Reports" },
    { href: "/settings", label: "Settings" },
  ];

  const links = session ? [...publicLinks.filter(l => l.href === "/"), ...privateLinks] : publicLinks;

  return (
    <header className="bg-teal-700 text-white px-6 py-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <img
              src="/LOGO.jpg"
              alt="Empulse Logo"
              className="w-12 h-12 object-cover p-2 rounded-xl bg-teal-500 border-2 border-white shadow-lg"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline text-white">
              {l.label}
            </Link>
          ))}

          {/* Show logout when session exists */}
          {session && (
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-white hover:underline"
            >
              Log out
            </button>
          )}
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden mt-3 space-y-3 px-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 bg-teal-800 rounded text-white"
            >
              {l.label}
            </Link>
          ))}

          {session && (
            <button
              onClick={() => {
                setOpen(false);
                signOut({ callbackUrl: "/login" });
              }}
              className="w-full text-left block px-4 py-2 bg-red-600 rounded text-white"
            >
              Log out
            </button>
          )}
        </nav>
      )}
    </header>
  );
}