import { Module } from '@nestjs/common';
import { ReligiousService } from './religious.service';
import { ReligiousResolver } from './religious.resolver';

@Module({
  providers: [ReligiousResolver, ReligiousService]
})
export class ReligiousModule {}
