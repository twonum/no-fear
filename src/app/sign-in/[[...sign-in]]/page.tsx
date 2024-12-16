// app/sign-in/page.tsx

import StarryBackground from "@/components/StarryBackground";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <StarryBackground /> {/* Ensure StarryBackground appears behind */}
      <div className="relative z-10 w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <SignIn />
      </div>
    </div>
  );
}
