import { Module } from '@nestjs/common';
import { VillageService } from './village.service';
import { VillageResolver } from './village.resolver';

@Module({
  providers: [VillageResolver, VillageService]
})
export class VillageModule {}
