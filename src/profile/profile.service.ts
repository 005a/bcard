import { Injectable, NotFoundException } from '@nestjs/common';
import {
  ProfileRepository,
  ProfileWithRelations,
} from './profile.repository.js';

export const PRIMARY_PROFILE_SLUG = 'alex'; // default slug, we have only one record

export type ProfileReadModel = Omit<ProfileWithRelations, 'experience'> & {
  experience: Array<
    ProfileWithRelations['experience'][number] & { period: string }
  >;
};

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async getProfile(): Promise<ProfileReadModel> {
    const profile =
      await this.profileRepository.findBySlug(PRIMARY_PROFILE_SLUG);

    if (!profile) {
      throw new NotFoundException('Profile has not been initialized');
    }

    return {
      ...profile,
      experience: profile.experience.map((item) => ({
        ...item,
        period: this.formatPeriod(item.startDate, item.endDate),
      })),
    };
  }

  private formatPeriod(startDate: Date, endDate: Date | null): string {
    const start = startDate.toISOString().slice(0, 7);
    const end = endDate?.toISOString().slice(0, 7) ?? 'Present';

    return `${start} — ${end}`;
  }
}
