// app/sign-in/page.tsx

import StarryBackground from "@/components/StarryBackground";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <StarryBackground /> {/* Ensure StarryBackground appears behind */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-lg">
        <SignIn />
      </div>
    </div>
  );
}
