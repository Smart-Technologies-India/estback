import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GenericService } from './generic.service';
import { Generic } from './entities/generic.entity';
import { CreateGenericInput } from './dto/create-generic.input';
import { UpdateGenericInput } from './dto/update-generic.input';

@Resolver(() => Generic)
export class GenericResolver {
  constructor(private readonly genericService: GenericService) {}

  @Query(() => [Generic])
  getAllGenerics() {
    return this.genericService.getAllGenerics();
  }

  @Query(() => Generic)
  getGenericById(@Args('id', { type: () => Int }) id: number) {
    return this.genericService.getGenericById(id);
  }

  @Mutation(() => Generic)
  createGeneric(
    @Args('createGenericInput') createGenericInput: CreateGenericInput,
  ) {
    return this.genericService.createGeneric(createGenericInput);
  }

  @Mutation(() => Generic)
  updateGenericById(
    @Args('updateGenericInput') updateGenericInput: UpdateGenericInput,
  ) {
    return this.genericService.updateGenericById(updateGenericInput);
  }

  @Mutation(() => Generic)
  deleteGenericById(
    @Args('updateGenericInput') updateGenericInput: UpdateGenericInput,
  ) {
    return this.genericService.deleteGenericById(updateGenericInput);
  }
}
