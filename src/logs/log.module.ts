import { Module } from '@nestjs/common';
import { LogController } from '@/logs/log.controller';
import { LogService } from '@/logs/log.service';
import { PrismaService } from '@/database/prisma.service';

@Module({
    imports: [],
    controllers: [LogController],
    providers: [LogService, PrismaService],
})
export class LogModule { }
