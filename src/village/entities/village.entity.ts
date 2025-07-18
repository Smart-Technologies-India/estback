import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Village {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}
