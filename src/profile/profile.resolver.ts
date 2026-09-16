import { Query, Resolver } from '@nestjs/graphql';
import { ProfileModel } from './models/profile.model.js';
import { ProfileReadModel, ProfileService } from './profile.service.js';

@Resolver(() => ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileModel, {
    description: 'Returns the digital business card with all related data.',
  })
  profile(): Promise<ProfileReadModel> {
    return this.profileService.getProfile();
  }
}
