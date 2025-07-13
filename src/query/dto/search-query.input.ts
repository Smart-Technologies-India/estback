import { InputType, Int, Field } from '@nestjs/graphql';
import { FormType, QueryType, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class SearchQueryInput {
  @IsNotEmpty()
  @Field(() => FormType)
  stage: FormType;

  @IsNotEmpty()
  @Field(() => Int)
  form_id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  user_id: number;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsNotEmpty()
  @Field(() => QueryType, { nullable: true })
  query_type: QueryType;
}
