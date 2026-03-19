"use client";

interface WorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdPage = async ({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) => {
  const { workspaceId } = await params;

  return <div>ID: {workspaceId}</div>;
};

export default WorkspaceIdPage;
