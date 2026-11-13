"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "ໜ້າຫຼັກ" },
    { href: "/products", label: "All Products" }, // <-- เพิ่มเมนูนี้
    { href: "/Likes", label: "Likes" },
    { href: "/countdown", label: "countdown" },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-bold text-lg">my website</span>
        <div className="flex gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1 rounded transition ${
                  isActive
                    ? "bg-white text-blue-600 font-bold shadow"
                    : "hover:bg-blue-500 text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}