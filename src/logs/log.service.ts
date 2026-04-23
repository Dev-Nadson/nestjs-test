import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '@/database/prisma.service';
import { CreateLogDTO } from './dtos/logs.dto';

@Injectable()
export class LogService {
    constructor(
        private prisma: PrismaService
    ) { }

    async listLogs() {
        const logs = await this.prisma.log.findMany()
        return logs
    }

    async createLog(body: CreateLogDTO) {
        const { pathname, method, status_code, duration, started_at } = body
        const log = await this.prisma.log.create({
            data: {
                pathname,
                method,
                statusCode: status_code,
                duration,
                startedAt: started_at
            }
        })
        return log
    }

    async createLogsBatch(body: CreateLogDTO[]) {
        return this.prisma.log.createMany({
            data: body.map(log => ({
                pathname: log.pathname,
                method: log.method,
                statusCode: log.status_code,
                duration: log.duration,
                startedAt: log.started_at
            })),
        });
    }
}


