import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MarriageService } from './marriage.service';
import { Marriage } from './entities/marriage.entity';
import { CreateMarriageInput } from './dto/create-marriage.input';
import { UpdateMarriageInput } from './dto/update-marriage.input';

@Resolver(() => Marriage)
export class MarriageResolver {
  constructor(private readonly marriageService: MarriageService) {}

  @Query(() => [Marriage])
  getAllMarriage() {
    return this.marriageService.getAllMarriage();
  }

  @Query(() => Marriage)
  getMarriageById(@Args('id', { type: () => Int }) id: number) {
    return this.marriageService.getMarriageById(id);
  }

  @Mutation(() => Marriage)
  createMarriage(
    @Args('createMarriageInput') createMarriageInput: CreateMarriageInput,
  ) {
    return this.marriageService.createMarriage(createMarriageInput);
  }

  @Mutation(() => Marriage)
  updateMarriageById(
    @Args('updateMarriageInput') updateMarriageInput: UpdateMarriageInput,
  ) {
    return this.marriageService.updateMarriageById(updateMarriageInput);
  }

  @Mutation(() => Marriage)
  deleteMarriageById(
    @Args('updateMarriageInput') updateMarriageInput: UpdateMarriageInput,
  ) {
    return this.marriageService.deleteMarriageById(updateMarriageInput);
  }
}
