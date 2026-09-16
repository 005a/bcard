import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../database/prisma.service.js';

const profileRelations = {
  links: { orderBy: [{ id: 'asc' }] },
  skills: { orderBy: [{ id: 'asc' }] },
  experience: { orderBy: [{ id: 'asc' }] },
  projects: { orderBy: [{ id: 'asc' }] },
} as const satisfies Prisma.ProfileInclude;

export type ProfileWithRelations = Prisma.ProfileGetPayload<{
  include: typeof profileRelations;
}>;

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  findBySlug(slug: string): Promise<ProfileWithRelations | null> {
    return this.prisma.profile.findUnique({
      where: { slug },
      include: profileRelations,
    });
  }
}
