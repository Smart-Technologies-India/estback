import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QueryService } from './query.service';
import { QueryData } from './entities/query.entity';
import { CreateQueryInput } from './dto/create-query.input';
import { UpdateQueryInput } from './dto/update-query.input';
import { SearchQueryInput } from './dto/search-query.input';

@Resolver(() => QueryData)
export class QueryResolver {
  constructor(private readonly queryService: QueryService) {}

  @Query(() => [QueryData])
  getAllQuery() {
    return this.queryService.getAllQuery();
  }

  @Query(() => QueryData)
  getQueryById(@Args('id', { type: () => Int }) id: number) {
    return this.queryService.getQueryById(id);
  }

  @Query(() => [QueryData])
  searchQuery(@Args('searchQueryInput') searchQueryInput: SearchQueryInput) {
    return this.queryService.searchQuery(searchQueryInput);
  }

  @Mutation(() => QueryData)
  createQuery(@Args('createQueryInput') createQueryInput: CreateQueryInput) {
    return this.queryService.createQuery(createQueryInput);
  }

  @Mutation(() => QueryData)
  updateQueryById(
    @Args('updateQueryInput') updateQueryInput: UpdateQueryInput,
  ) {
    return this.queryService.updateQueryById(updateQueryInput);
  }

  @Mutation(() => QueryData)
  deleteQueryById(
    @Args('updateQueryInput') updateQueryInput: UpdateQueryInput,
  ) {
    return this.queryService.deleteQueryById(updateQueryInput);
  }
}
