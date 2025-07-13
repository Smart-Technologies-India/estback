import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FormType, Status, queryStatus } from '@prisma/client';

@ObjectType()
export class OfficerCount {
  @Field(() => Int)
  count: number;

  @Field(() => String)
  auth_user_id: string;
}
