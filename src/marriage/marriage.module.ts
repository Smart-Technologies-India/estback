import { Module } from '@nestjs/common';
import { MarriageService } from './marriage.service';
import { MarriageResolver } from './marriage.resolver';

@Module({
  providers: [MarriageResolver, MarriageService]
})
export class MarriageModule {}
