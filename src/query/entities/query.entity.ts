import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FormType, QueryStatus, QueryType, Status } from '@prisma/client';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class QueryData {
  @Field(() => Int)
  id: number;

  @Field(() => FormType)
  stage: FormType;

  @Field(() => Int)
  form_id: number;

  @Field(() => Int)
  form_status: number;

  @Field(() => Int)
  from_user_id: number;

  @Field(() => Int)
  to_user_id: number;

  @Field(() => QueryType)
  query_type: QueryType;

  @Field(() => QueryStatus)
  query_status: QueryStatus;

  @Field(() => String)
  remark: string;

  @Field(() => String, { nullable: true })
  doc_url: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => User, { nullable: true })
  from_user: User;

  @Field(() => User, { nullable: true })
  to_user: User;
}
