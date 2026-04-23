import { Body, Controller, Get, ParseArrayPipe, Post } from '@nestjs/common';
import { LogService } from './log.service';
import { CreateLogDTO } from './dtos/logs.dto';

@Controller('logs')
export class LogController {
    constructor(private logService: LogService) { }

    @Get('list')
    listLogs() {
        return this.logService.listLogs()
    }

    @Post('create')
    createLog(@Body() body: CreateLogDTO) {
        return this.logService.createLog(body)
    }

    @Post('batch')
    async createBatch(
        @Body(new ParseArrayPipe({ items: CreateLogDTO }))
        body: CreateLogDTO[],
    ) {
        return this.logService.createLogsBatch(body);
    }
}
