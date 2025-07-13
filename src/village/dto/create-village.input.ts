import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVillageInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
