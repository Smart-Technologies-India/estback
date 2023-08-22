import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoadshowService } from './roadshow.service';
import { Roadshow } from './entities/roadshow.entity';
import { CreateRoadshowInput } from './dto/create-roadshow.input';
import { UpdateRoadshowInput } from './dto/update-roadshow.input';

@Resolver(() => Roadshow)
export class RoadshowResolver {
  constructor(private readonly roadshowService: RoadshowService) {}

  @Query(() => [Roadshow])
  getAllRoadshow() {
    return this.roadshowService.getAllRoadshow();
  }

  @Query(() => Roadshow)
  getRoadshowById(@Args('id', { type: () => Int }) id: number) {
    return this.roadshowService.getRoadshowById(id);
  }

  @Mutation(() => Roadshow)
  createRoadshow(
    @Args('createRoadshowInput') createRoadshowInput: CreateRoadshowInput,
  ) {
    return this.roadshowService.createRoadshow(createRoadshowInput);
  }

  @Mutation(() => Roadshow)
  updateRoadshowById(
    @Args('updateRoadshowInput') updateRoadshowInput: UpdateRoadshowInput,
  ) {
    return this.roadshowService.updateRoadshowById(updateRoadshowInput);
  }

  @Mutation(() => Roadshow)
  deleteRoadshowById(
    @Args('updateRoadshowInput') updateRoadshowInput: UpdateRoadshowInput,
  ) {
    return this.roadshowService.deleteRoadshowById(updateRoadshowInput);
  }
}
