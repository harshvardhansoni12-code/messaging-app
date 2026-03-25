import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { use } from "react";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  // Your other tables...
  workspaces: defineTable({
    name: v.string(),
    userIds: v.array(v.id("users")),
    joinCode: v.string(),
  }),
});

export default schema;
