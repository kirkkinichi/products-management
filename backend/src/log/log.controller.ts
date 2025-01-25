import { Controller, Get, Query } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
    constructor(private readonly logService: LogService) { }

    @Get()
    async findAll(
        @Query('entidade') entidade: string,
        @Query('pagina') pagina: number = 1,
    ) {
        const limite = 50;

        const logs = await this.logService.findLogs(entidade, pagina, limite);

        return logs;
    }
}
