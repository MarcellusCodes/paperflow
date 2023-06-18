import { prisma } from "@/server/db";

export function createOrganization(name: string, userId: string) {
  return prisma.organization.create({
    data: {
      name: name,
      users: {
        connect: { id: userId },
      },
    },
  });
}
