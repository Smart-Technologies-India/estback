import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FormType, Status, queryStatus } from '@prisma/client';

@ObjectType()
export class Common {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  form_id: number;

  @Field(() => Int)
  user_id: number;

  @Field(() => String, { nullable: true })
  auth_user_id: string;

  @Field(() => String, { nullable: true })
  focal_user_id: string;

  @Field(() => String, { nullable: true })
  intra_user_id: string;

  @Field(() => String, { nullable: true })
  inter_user_id: string;

  @Field(() => String)
  village: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  number: string;

  @Field(() => Date)
  event_date: Date;

  @Field(() => Int)
  form_status: number;

  @Field(() => FormType)
  form_type: FormType;

  @Field(() => queryStatus)
  query_status: queryStatus;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date)
  deletedAt: Date;
}
