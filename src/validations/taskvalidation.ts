import {z} from "zod";

export const taskschema = z.object({
  title: z.string().min(1, "Title must be at least 1 character long"),
  status: z.enum(["pending", "in-progress", "completed"])
})