import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Skill')
export class SkillModel {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  category: string | null;
}
