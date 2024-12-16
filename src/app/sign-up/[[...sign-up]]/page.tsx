// app/sign-up/page.tsx

import StarryBackground from "@/components/StarryBackground";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <StarryBackground /> {/* Ensure StarryBackground appears behind */}
      <div className="relative z-10 w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <SignUp />
      </div>
    </div>
  );
}
