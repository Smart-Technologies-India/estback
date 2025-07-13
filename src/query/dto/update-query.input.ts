import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateQueryInput } from './create-query.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { FormType, QueryStatus, QueryType, Status } from '@prisma/client';

@InputType()
export class UpdateQueryInput extends PartialType(CreateQueryInput) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => FormType)
  stage: FormType;

  @IsOptional()
  @Field(() => Int)
  form_id: number;

  @IsOptional()
  @Field(() => Int)
  form_status: number;

  @IsOptional()
  @Field(() => Int)
  from_user_id: number;

  @IsOptional()
  @Field(() => Int)
  to_user_id: number;

  @IsOptional()
  @Field(() => QueryType)
  query_type: QueryType;

  @IsOptional()
  @Field(() => QueryStatus)
  query_status: QueryStatus;

  @IsOptional()
  @Field(() => String)
  remark: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  doc_url: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
