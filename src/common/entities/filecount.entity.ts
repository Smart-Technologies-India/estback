import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FormType, Status, queryStatus } from '@prisma/client';

@ObjectType()
export class FileCount {
  @Field(() => Int)
  MARRIAGE: number;

  @Field(() => Int)
  RELIGIOUS: number;

  @Field(() => Int)
  ROADSHOW: number;

  @Field(() => Int)
  GENERIC: number;
}
