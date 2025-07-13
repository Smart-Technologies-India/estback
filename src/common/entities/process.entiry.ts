import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class FileProgressDetails {
  @Field(() => Int)
  pending: number;
  @Field(() => Int)
  completed: number;
  @Field(() => Int)
  rejected: number;
}

@ObjectType()
export class FileProgress {
  @Field(() => FileProgressDetails)
  MARRIAGE: FileProgressDetails;

  @Field(() => FileProgressDetails)
  RELIGIOUS: FileProgressDetails;

  @Field(() => FileProgressDetails)
  ROADSHOW: FileProgressDetails;

  @Field(() => FileProgressDetails)
  GENERIC: FileProgressDetails;
}
