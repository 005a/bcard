import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ExperienceModel } from './experience.model.js';
import { ProfessionalLinkModel } from './professionalLink.model.js';
import { ProjectModel } from './project.model.js';
import { SkillModel } from './skill.model.js';

@ObjectType('Profile')
export class ProfileModel {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [ProfessionalLinkModel])
  links: ProfessionalLinkModel[];

  @Field(() => [SkillModel])
  skills: SkillModel[];

  @Field(() => [ExperienceModel])
  experience: ExperienceModel[];

  @Field(() => [ProjectModel])
  projects: ProjectModel[];
}
