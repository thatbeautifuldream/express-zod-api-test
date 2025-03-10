import { defaultEndpointsFactory } from "express-zod-api";
import { z } from "zod";

export const helloEndpoint = defaultEndpointsFactory.build({
  method: "get",
  input: z.object({ name: z.string().optional() }),
  output: z.object({ greeting: z.string() }),
  handler: async ({ input }) => ({
    greeting: `Hello, ${input.name || "World"}!`,
  }),
});
