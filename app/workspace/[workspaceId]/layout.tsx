"use client";

import ToolBar from "./components/toolbar";
import SideBar from "./components/sidebar";
//

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full ">
      <ToolBar />
      <div className="flex h-[100vh-40px]">
        <SideBar />
      </div>
      {children}
    </div>
  );
};
//
export default WorkspaceIdLayout;
