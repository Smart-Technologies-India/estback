import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { FormType, QueryStatus, QueryType, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

registerEnumType(QueryType, {
  name: 'QueryType',
});

registerEnumType(QueryStatus, {
  name: 'QueryStatus',
});

@InputType()
export class CreateQueryInput {
  @IsNotEmpty()
  @Field(() => FormType)
  stage: FormType;

  @IsNotEmpty()
  @Field(() => Int)
  form_id: number;

  @IsNotEmpty()
  @Field(() => Int)
  form_status: number;

  @IsNotEmpty()
  @Field(() => Int)
  from_user_id: number;

  @IsNotEmpty()
  @Field(() => Int)
  to_user_id: number;

  @IsNotEmpty()
  @Field(() => QueryType)
  query_type: QueryType;

  @IsNotEmpty()
  @Field(() => QueryStatus)
  query_status: QueryStatus;

  @IsNotEmpty()
  @Field(() => String)
  remark: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  doc_url: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
