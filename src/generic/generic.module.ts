import { Module } from '@nestjs/common';
import { GenericService } from './generic.service';
import { GenericResolver } from './generic.resolver';

@Module({
  providers: [GenericResolver, GenericService],
})
export class GenericModule {}
