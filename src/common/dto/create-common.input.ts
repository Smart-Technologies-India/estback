import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { FormType, Status, queryStatus } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { DateTime } from 'src/graphql';

registerEnumType(FormType, {
  name: 'FormType',
});

registerEnumType(queryStatus, {
  name: 'queryStatus',
});

@InputType()
export class CreateCommonInput {
  @IsNotEmpty()
  @Field(() => Int)
  form_id: number;

  @IsNotEmpty()
  @Field(() => Int)
  user_id: number;

  @IsNotEmpty()
  @Field(() => String)
  auth_user_id: string;

  @IsNotEmpty()
  @Field(() => String)
  focal_user_id: string;

  @IsNotEmpty()
  @Field(() => String)
  intra_user_id: string;

  @IsNotEmpty()
  @Field(() => String)
  inter_user_id: string;

  @IsNotEmpty()
  @Field(() => String)
  village: string;

  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @Field(() => String)
  number: string;

  @IsNotEmpty()
  @Field(() => Date)
  event_date: Date;

  @IsNotEmpty()
  @Field(() => Int)
  form_status: number;

  @IsNotEmpty()
  @Field(() => FormType, { nullable: true })
  form_type: FormType;

  @IsNotEmpty()
  @Field(() => queryStatus, { nullable: true })
  query_status: queryStatus;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
