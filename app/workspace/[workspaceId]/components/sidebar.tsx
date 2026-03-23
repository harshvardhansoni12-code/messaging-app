import { UserButton } from "@/features/auth/components/user-button";
import WorkspaceSwitcher from "./workspace-switcher";
const SideBar = () => {
  return (
    <>
      <aside className="w-20 h-full bg-[#481349] flex flex-col items-center justify-between pt-1">
        <WorkspaceSwitcher />
        <div>
          <UserButton />
        </div>
      </aside>
    </>
  );
};

export default SideBar;
