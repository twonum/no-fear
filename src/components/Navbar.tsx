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
import { useState } from "react";

const Navbar = () => {
  const { user } = useUser();
  const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(",") || [];
  const isAdmin =
    user && adminEmails.includes(user.emailAddresses[0]?.emailAddress);

  const pathname = usePathname();
  const isAdminPage = pathname === "/admin";

  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-40 backdrop-blur-lg shadow-lg border-b border-white/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Side: Brand */}
        <div className="text-2xl font-bold tracking-wide text-white">
          <Link href="/" className="hover:text-gray-300 transition">
            No Fear 😎
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Center: Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-8 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-black lg:bg-transparent ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {["Home", "About", "Contact", "Dev"].map((item, index) => {
            const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <li
                key={index}
                className="text-center lg:text-left group relative"
              >
                <Link
                  href={href}
                  className="block px-4 py-2 lg:py-0 text-white font-medium transform transition-all duration-300 group-hover:scale-105"
                >
                  {item}
                  {/* Glowing Effect */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-slate-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-full"></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side: User Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {isAdmin && !isAdminPage && (
            <Link
              href="/admin"
              className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Admin Dashboard
            </Link>
          )}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      {/* Mobile Menu for User Actions */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-2 pb-4 bg-black bg-opacity-40 backdrop-blur-lg">
          {isAdmin && !isAdminPage && (
            <Link
              href="/admin"
              className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Admin Dashboard
            </Link>
          )}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
