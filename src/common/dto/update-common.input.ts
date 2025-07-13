import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateCommonInput } from './create-common.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { FormType, Status, queryStatus } from '@prisma/client';

@InputType()
export class UpdateCommonInput extends PartialType(CreateCommonInput) {
  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  form_id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  user_id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  auth_user_id: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  focal_user_id: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  intra_user_id: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  inter_user_id: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  village: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  number: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  event_date: Date;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  form_status: number;

  @IsOptional()
  @Field(() => FormType, { nullable: true })
  form_type: FormType;

  @IsOptional()
  @Field(() => queryStatus, { nullable: true })
  query_status: queryStatus;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
