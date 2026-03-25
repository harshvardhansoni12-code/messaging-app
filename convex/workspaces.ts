import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";
//////
export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    //
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

    // Check if workspace with this name already exists
    const existingWorkspace = await ctx.db
      .query("workspaces")
      .filter((q) => q.eq(q.field("name"), args.name))
      .first();

    if (existingWorkspace) {
      // If user is not already a member, add them
      if (!existingWorkspace.userIds.includes(userId)) {
        await ctx.db.patch(existingWorkspace._id, {
          userIds: [...existingWorkspace.userIds, userId],
        });
      }
      // Return null to indicate no new workspace created
      return null;
    }

    // send join code
    const joinCode = "123456";

    const workspaceId = await ctx.db.insert("workspaces", {
      name: args.name,
      userIds: [userId],
      joinCode,
    });
    return await ctx.db.get(workspaceId);
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return [];
    }
    const allWorkspaces = await ctx.db.query("workspaces").collect();
    return allWorkspaces.filter((workspace) =>
      workspace.userIds.includes(userId),
    );
  },
});

export const migrateUserIds = mutation({
  args: {},
  handler: async (ctx) => {
    const workspaces = await ctx.db.query("workspaces").collect();
    for (const workspace of workspaces) {
      if (!Array.isArray(workspace.userIds)) {
        await ctx.db.patch(workspace._id, {
          userIds: [workspace.userIds],
        });
      }
    }
  },
});
