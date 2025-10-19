"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  Home,
  Users,
  CheckSquare,
  FileText,
  BarChart2,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const items = [
    { icon: Home, label: "Landing page", href: "/" },
    { icon: Users, label: "Employee Management", href: "/employees" },
    { icon: CheckSquare, label: "Attendance", href: "#" },
    { icon: FileText, label: "Payroll", href: "#" },
    { icon: BarChart2, label: "Reports", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  return (
    <aside className="bg-white p-6 shadow-md h-full">
      <ul className="space-y-6 text-gray-700">
        {items.map(({ icon: Icon, label, href }) => (
          <li key={label} className="flex items-center gap-3">
            <Icon />
            <Link href={href} className="hover:text-teal-700">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <button
          onClick={async () => {
            // sign out and redirect to login
            await signOut({ callbackUrl: "/login" });
          }}
          className="inline-flex items-center gap-2 text-red-600"
        >
          <LogOut />
          Log out
        </button>
      </div>
    </aside>
  );
}
