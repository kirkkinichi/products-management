import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  async getStatus() {
    const currentDateTime = new Date().toISOString();

    // Verify server status
    const serverStatus = this.statusService.checkServer() ? 'ok' : 'falha';

    // Verify database status
    const db = await this.statusService.checkDatabase();
    const databaseStatus = db ? 'ok' : 'falha';

    return {
      dateTime: currentDateTime,
      serverStatus: serverStatus,
      databaseStatus: databaseStatus,
    };
  }
}
