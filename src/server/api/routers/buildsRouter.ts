import { BUILD_ID_FILE } from "next/dist/shared/lib/constants";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const buildsRouter = createTRPCRouter({
  createBuild: publicProcedure
    .input(z.object({ matchup: z.string(),build:z.string() }))
        .mutation(async({ input ,ctx}) => {
        //TODOS save to database
           const build=await  ctx.prisma.buildOrder.create({
                data: {
                        ...input,
                    }
           })
            return build;
        }),
  getBuilds: publicProcedure
    .query(async ({ctx}) => {
      const builds = await ctx.prisma.buildOrder.findMany();
    
    return builds;
    }),
});
