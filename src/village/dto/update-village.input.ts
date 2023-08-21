import { CreateVillageInput } from './create-village.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVillageInput extends PartialType(CreateVillageInput) {
  @Field(() => Int)
  id: number;
}
