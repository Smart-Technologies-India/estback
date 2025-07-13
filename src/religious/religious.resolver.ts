import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReligiousService } from './religious.service';
import { Religious } from './entities/religious.entity';
import { CreateReligiousInput } from './dto/create-religious.input';
import { UpdateReligiousInput } from './dto/update-religious.input';

@Resolver(() => Religious)
export class ReligiousResolver {
  constructor(private readonly religiousService: ReligiousService) {}

  @Query(() => [Religious])
  getAllReligious() {
    return this.religiousService.getAllReligious();
  }

  @Query(() => Religious)
  getReligiousById(@Args('id', { type: () => Int }) id: number) {
    return this.religiousService.getReligiousById(id);
  }

  @Mutation(() => Religious)
  createReligious(
    @Args('createReligiousInput') createReligiousInput: CreateReligiousInput,
  ) {
    return this.religiousService.createReligious(createReligiousInput);
  }

  @Mutation(() => Religious)
  updateReligiousById(
    @Args('updateReligiousInput') updateReligiousInput: UpdateReligiousInput,
  ) {
    return this.religiousService.updateReligiousById(updateReligiousInput);
  }

  @Mutation(() => Religious)
  deleteReligiousById(
    @Args('updateReligiousInput') updateReligiousInput: UpdateReligiousInput,
  ) {
    return this.religiousService.deleteReligiousById(updateReligiousInput);
  }
}
