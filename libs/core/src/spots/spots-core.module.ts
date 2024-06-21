import { Module } from '@nestjs/common';
import { SpotsService } from './spots.service';

@Module({
  providers: [SpotsService],
  exports: [SpotsModule],
})
export class SpotsModule {}
