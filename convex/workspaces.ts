import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";
//////
const normalizeUserIds = (userIds: unknown): string[] => {
  if (Array.isArray(userIds)) {
    return userIds;
  }
  if (typeof userIds === "string") {
    return [userIds];
  }
  return [];
};

export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

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
    return allWorkspaces.filter((workspace) => {
      const members = normalizeUserIds(workspace.userIds);
      return members.includes(userId);
    });
  },
});

export const getById = query({
  args: { id: v.id("workspaces") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("unauthorized");
    }
    const workspace = await ctx.db.get(args.id);
    if (!workspace) {
      return null;
    }
    const members = normalizeUserIds(workspace.userIds);
    if (!members.includes(userId)) {
      return null;
    }
    return workspace;
  },
});

export const migrateUserIds = mutation({
  args: {},
  handler: async (ctx) => {
    const workspaces = await ctx.db.query("workspaces").collect();
    let migratedCount = 0;
    for (const workspace of workspaces) {
      if (!Array.isArray(workspace.userIds)) {
        await ctx.db.patch(workspace._id, {
          userIds: [workspace.userIds],
        });
        migratedCount += 1;
      }
    }
    return { migrated: migratedCount };
  },
});
