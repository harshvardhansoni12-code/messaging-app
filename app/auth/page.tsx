import Image from "next/image";
import { AuthScreen } from "@/features/auth/components/auth-screen";
const SignIn = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-[#5C3B58]">
        <div className="md:h-auto md:w-90">
          <AuthScreen />
        </div>
      </div>
    </>
  );
};

export default SignIn;
