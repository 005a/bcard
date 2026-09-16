import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('ProfessionalLink')
export class ProfessionalLinkModel {
  @Field(() => ID)
  id: number;

  @Field()
  label: string;

  @Field()
  url: string;
}
