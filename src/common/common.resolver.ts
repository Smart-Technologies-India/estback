import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommonService } from './common.service';
import { Common } from './entities/common.entity';
import { CreateCommonInput } from './dto/create-common.input';
import { UpdateCommonInput } from './dto/update-common.input';
import { SearchCommonInput } from './dto/search-common.input';
import { FileCount } from './entities/filecount.entity';
import { VillageCount } from './entities/villagecount.entity';
import { OfficerCount } from './entities/officercount.entity';
import { FilterCommonInput } from './dto/filter-common.input';
import { FileProgress } from './entities/process.entiry';
import { VillageProgress } from './entities/villageprocess.entity';

@Resolver(() => Common)
export class CommonResolver {
  constructor(private readonly commonService: CommonService) {}

  @Query(() => [Common])
  getAllCommon() {
    return this.commonService.getAllCommon();
  }

  @Query(() => Common)
  getAllCommonById(@Args('id', { type: () => Int }) id: number) {
    return this.commonService.getAllCommonById(id);
  }

  @Query(() => [Common])
  searchCommon(
    @Args('searchCommonInput') searchCommonInput: SearchCommonInput,
  ) {
    return this.commonService.searchCommon(searchCommonInput);
  }

  @Query(() => [Common])
  filterCommon(
    @Args('filterCommonInput') filterCommonInput: FilterCommonInput,
  ) {
    return this.commonService.filterCommon(filterCommonInput);
  }

  @Mutation(() => Common)
  createCommon(
    @Args('createCommonInput') createCommonInput: CreateCommonInput,
  ) {
    return this.commonService.createCommon(createCommonInput);
  }

  @Mutation(() => Common)
  updateCommonById(
    @Args('updateCommonInput') updateCommonInput: UpdateCommonInput,
  ) {
    return this.commonService.updateCommonById(updateCommonInput);
  }

  @Mutation(() => Common)
  deleteCommonById(
    @Args('updateCommonInput') updateCommonInput: UpdateCommonInput,
  ) {
    return this.commonService.deleteCommonById(updateCommonInput);
  }

  @Query(() => FileCount)
  getFileCount() {
    return this.commonService.getFileCount();
  }

  @Query(() => [VillageCount])
  villageFileCount() {
    return this.commonService.villageFileCount();
  }

  @Query(() => [OfficerCount])
  officerFileCount() {
    return this.commonService.officerFileCount();
  }

  @Query(() => FileProgress)
  officerFileProgress() {
    return this.commonService.officerFileProgress();
  }

  @Query(() => [VillageProgress])
  villageFileProgress() {
    return this.commonService.villageFileProgress();
  }
}
