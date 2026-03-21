"use client";

import ToolBar from "./components/toolbar";
import SideBar from "./components/sidebar";
//

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full">
      <ToolBar />
      <div className="flex h-full">
        <SideBar />
        {children}
      </div>
    </div>
  );
};
//
export default WorkspaceIdLayout;
