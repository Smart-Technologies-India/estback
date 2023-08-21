import { InputType, Field, Float } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class MobileLoginInput {
  @IsOptional()
  @Field(() => String, { nullable: true })
  contact: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  otp: string;
}
