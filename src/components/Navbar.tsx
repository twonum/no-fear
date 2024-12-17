// @ts-nocheck
"use client";

import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { user } = useUser();
  const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];

  const isAdmin =
    user && adminEmails.includes(user.emailAddresses[0]?.emailAddress);

  // Check if the current route is the admin page
  const pathname = usePathname();
  const isAdminPage = pathname === "/admin";

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-transparent text-white z-50">
      {/* Left side: Brand */}
      <div className="font-bold text-2xl tracking-wide">
        <Link href="/" className="text-white hover:text-gray-300">
          No Fear 😎
        </Link>
      </div>

      {/* Center: Navigation links */}
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="hover:underline transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:underline transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:underline transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/dev"
              className="hover:underline transition duration-300"
            >
              Dev
            </Link>
          </li>
        </ul>
      </div>

      {/* Right side: User-related actions */}
      <div className="flex items-center space-x-4">
        {isAdmin && !isAdminPage && (
          <Link
            href="/admin"
            className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition duration-300"
          >
            Admin Dashboard
          </Link>
        )}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition duration-300">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>

      {/* Shining Line Under Navbar */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-full max-w-screen-xl h-1 bg-white animate-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
