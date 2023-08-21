import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FormType, Status, queryStatus } from '@prisma/client';

@ObjectType()
export class VillageCount {
  @Field(() => Int)
  count: number;

  @Field(() => String)
  village: string;
}
