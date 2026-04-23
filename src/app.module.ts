import { Module } from '@nestjs/common';
import { LogModule } from './logs/log.module';

@Module({
  imports: [LogModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
