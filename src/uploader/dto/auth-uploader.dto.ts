import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  isStrongPassword,
} from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @IsNotEmpty()
  public UserId: string;

  @IsString()
  @IsNotEmpty()
  public AccessKey: string;
}
