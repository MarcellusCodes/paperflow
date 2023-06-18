import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { createOrganization } from "~/mutations/create-organization";

export const organizationRouter = createTRPCRouter({
  add: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await createOrganization(input.name, ctx.session.user.id);
      return {
        response: `Added Organization ${input.name}`,
      };
    }),
});
