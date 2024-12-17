// @ts-nocheck
"use client";

import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import StarryBackground from "@/components/StarryBackground";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider, RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define routes where the Navbar should not appear
  const noNavbarRoutes = ["/sign-in", "/sign-up"];

  // Check if the current route matches any of the noNavbarRoutes
  const shouldShowNavbar = !noNavbarRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    //@ts-ignore
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <StarryBackground />{" "}
          {/* Starry background placed behind everything */}
          {shouldShowNavbar && <Navbar />} {/* Conditionally render Navbar */}
          <div className="relative z-10">
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
            <Provider>{children}</Provider>
            <Toaster />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
