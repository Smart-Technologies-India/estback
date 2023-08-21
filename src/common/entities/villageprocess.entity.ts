import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VillageProgressDetails {
  @Field(() => String)
  formType: string;

  @Field(() => Int)
  count: number;
}

@ObjectType()
export class VillageProgress {
  @Field(() => String)
  village: string;

  @Field(() => [VillageProgressDetails])
  fileCounts: VillageProgressDetails[];
}
