import { Department, Role, Status } from '@prisma/client';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  password: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  contact: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  pic_url: string;

  @IsOptional()
  @Field(() => Role, { nullable: true })
  role: Role;

  @IsOptional()
  @Field(() => Department, { nullable: true })
  department: Department;

  @IsOptional()
  @Field(() => String, { nullable: true })
  address: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  user_uid: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
