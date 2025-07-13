import { InputType, Int, Field } from '@nestjs/graphql';
import { Agree, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateReligiousInput {
  @IsNotEmpty()
  @Field(() => Int)
  userId: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  user_uid: string;

  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @Field(() => String)
  address: string;

  @IsNotEmpty()
  @Field(() => String)
  mobile: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsNotEmpty()
  @Field(() => Int)
  village_id: number;

  @IsNotEmpty()
  @Field(() => Date)
  from_date: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  to_date: Date;

  @IsNotEmpty()
  @Field(() => String)
  event_name: string;

  @IsNotEmpty()
  @Field(() => String)
  event_address: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  route_info: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  relation: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  doc_1_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  doc_2_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  applicant_uid_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  undertaking_url: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  signature_url: string;

  @IsOptional()
  @Field(() => Agree, { nullable: true })
  iagree: Agree;

  @IsOptional()
  @Field(() => String, { nullable: true })
  remarks: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  other_remarks: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
