import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VillageService } from './village.service';
import { Village } from './entities/village.entity';
import { CreateVillageInput } from './dto/create-village.input';
import { UpdateVillageInput } from './dto/update-village.input';

@Resolver(() => Village)
export class VillageResolver {
  constructor(private readonly villageService: VillageService) {}

  @Query(() => [Village])
  getAllVillage() {
    return this.villageService.getAllVillage();
  }

  @Query(() => Village)
  getVillageById(@Args('id', { type: () => Int }) id: number) {
    return this.villageService.getVillageById(id);
  }
}
