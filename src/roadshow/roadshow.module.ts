import { Module } from '@nestjs/common';
import { RoadshowService } from './roadshow.service';
import { RoadshowResolver } from './roadshow.resolver';

@Module({
  providers: [RoadshowResolver, RoadshowService]
})
export class RoadshowModule {}
