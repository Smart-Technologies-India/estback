import { Module } from '@nestjs/common';
import { QueryService } from './query.service';
import { QueryResolver } from './query.resolver';

@Module({
  providers: [QueryResolver, QueryService]
})
export class QueryModule {}
