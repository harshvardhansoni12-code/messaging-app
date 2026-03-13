import { AuthScreen } from "@/features/auth/components/auth-screen";
const AuthPage = () => {
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

export default AuthPage;
