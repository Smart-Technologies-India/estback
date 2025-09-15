import { ObjectType, Field, Int } from '@nestjs/graphql';

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
