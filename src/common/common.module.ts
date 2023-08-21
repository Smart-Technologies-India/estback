import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonResolver } from './common.resolver';

@Module({
  providers: [CommonResolver, CommonService]
})
export class CommonModule {}
