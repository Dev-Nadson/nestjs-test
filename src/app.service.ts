import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Injectable()
export class AppService {
  constructor(
    private prisma: PrismaService
  ) { }

  getStatus() {
    return { status: "on" };
  }

  async createLog() {
    const log = await this.prisma.logsAudit.create({
      data: {
        pathname: "/api/status",
        method: "get",
        status_code: "200",
        duration: 1
      }
    })

    return log
  }
}
