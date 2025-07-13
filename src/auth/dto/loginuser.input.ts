import { InputType, Field, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

@InputType()
export class LoginUserInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  contact: string;

  @Length(8, 16, {
    message: 'Password has to be at between 8 to 16 character.',
  })
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  password: string;
}
